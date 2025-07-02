// --- Firebase Initialization ---
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, setPersistence, browserSessionPersistence} from "firebase/auth";
import { getDatabase, ref as dbRef, push, serverTimestamp, onValue, off, remove, update} from "firebase/database";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL} from "firebase/storage";
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage();
const provider = new GoogleAuthProvider();
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Le-LXUrAAAAAAxKm034g5E9dpEN9KlLcRaOgZcG'),
  isTokenAutoRefreshEnabled: true
});


// --- DOM Elements ---
const testButton = document.getElementById('test');
const loginButton = document.getElementById('login');
const messageButton = document.getElementById('messageButton');
const messageInput = document.getElementById('messageInput');
const titleInput = document.getElementById('titleInput');
const profilePic = document.getElementById('profile');
const form = document.getElementById('uploadImage');
const submitButton = form.querySelector('button[type="submit"]');
const fileInput = document.querySelector('#uploadImage input[name="file"]');
const preview = document.getElementById('preview');
const showMessagesButton = document.getElementById('showMessages');
const showImagesButton = document.getElementById('showImages');
const dataPlace = document.getElementById('displayData');
const editImageInput = document.getElementById('editImageInput');

// --- State ---
let currentListenerRef = null;
let pendingEditKey = null;

function detachPreviousListener() {
  if (currentListenerRef) {
    off(currentListenerRef);
    currentListenerRef = null;
  }
}

// --- Auth Management ---
async function setupAuthPersistence() {
  try {
    await setPersistence(auth, browserSessionPersistence);
  } catch (error) {
    console.error("❌ Failed to set persistence:", error);
  }
}

function onUserStateChanged(user) {
  if (user) {
    console.log("✅ User signed in:", user.displayName);
    profilePic.src = user.photoURL || "";
    loginButton.textContent = "Log out";
  } else {
    console.log("❌ No user signed in.");
    profilePic.src = "";
    loginButton.textContent = "Login with Google";
    //dataPlace.innerHTML = "";
  }
}

function checkIfAuth(user){
  if (!user) alert("Not logged in");
  else if (user.uid != "wgDE9laS5FaN6FCwDGK467xlkXB2") alert("Premission denied")
}

// --- Database Read ---
function loadUserMessages(user) {
  dataPlace.innerHTML = "Loading messages...";
  detachPreviousListener();

  const messagesRef = dbRef(db, `users/${user.uid}/messages`);
  currentListenerRef = messagesRef;

  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      dataPlace.innerHTML = "No messages found.";
      return;
    }
    
    // <button class="save-button" data-key="${key}">💾</button>
    let html = Object.entries(data).map(([key, { message, timestamp }]) => `
      <div>
        <button class="delete-message-button" data-key="${key}">🗑️</button>
        <br>
        <span><strong>Message:</strong> ${message}</span>
        <button class="edit-message-button" data-key="${key}" data-message="${message}">🖊️</button>
        <br>
        <span><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</span>
        <hr>
      </div>
    `).reverse().join("");

    dataPlace.innerHTML = html;

  });
}

function loadUserImages(user) {
  dataPlace.innerHTML = "Loading images...";
  detachPreviousListener();

  const imagesRef = dbRef(db, `users/${user.uid}/images`);
  currentListenerRef = imagesRef;

  onValue(imagesRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      dataPlace.innerHTML = "No images found.";
      return;
    }

    let html = Object.entries(data).map(([key, { image, title, timestamp }]) => `
      <div style="margin-bottom: 20px;">
        <button class="delete-image-button" data-key="${key}">🗑️</button>
        <br>
        <span><strong>Title:</strong> ${title}<span>
        <button class="edit-title-button" data-key="${key}" data-title="${title}">🖊️</button>
        <br>
        <span><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</span>
        <br>
        <span><strong>Image ↓</strong></span>
        <button class="edit-image-button" data-key="${key}" data-image="${image}">🖊️</button>
        <br>
        <img src="${image}" alt="${title}" style="max-width: 300px; display: block; margin-top: 10px;">
        <hr>
        </div>
    `).reverse().join("");

    dataPlace.innerHTML = html;
  });
}

// --- Database Edit ---
function writeUserMessage(message) {
  const user = auth.currentUser;
checkIfAuth(user);
  const messagesRef = dbRef(db, `users/${user.uid}/messages`);
  return push(messagesRef, { message, timestamp: serverTimestamp() });
}

function writeUserImage(imageData, title) {
  const user = auth.currentUser;
  if (!user) return Promise.reject("Not logged in");
  const imagesRef = dbRef(db, `users/${user.uid}/images`);
  return push(imagesRef, { image: imageData, title, timestamp: serverTimestamp() });
}

function deleteMessage(key){
  const user = auth.currentUser;
  checkIfAuth(user);
  const messageRef = dbRef(db, `users/${user.uid}/messages/${key}`);
  return remove(messageRef);
}

function deleteImage(key){
  const user = auth.currentUser;
  checkIfAuth(user);
  const messageRef = dbRef(db, `users/${user.uid}/images/${key}`);
  return remove(messageRef);
}

function editMessage(key, newMessage){
  const user = auth.currentUser;
  checkIfAuth(user);
  const messageRef = dbRef(db, `users/${user.uid}/messages/${key}`);
  return update(messageRef, {"/message": newMessage});
}

function editTitle(key, newTitle){
  const user = auth.currentUser;
  checkIfAuth(user);
  const messageRef = dbRef(db, `users/${user.uid}/images/${key}`);
  return update(messageRef, {"/title": newTitle});
}

function editImage(key, newImage){
  const user = auth.currentUser;
  checkIfAuth(user);
  const messageRef = dbRef(db, `users/${user.uid}/images/${key}`);
  return update(messageRef, {"/image": newImage});
}

// --- UI Helpers ---
function clearInputs() {
  messageInput.value = ""
  fileInput.value = "";
  preview.innerHTML = "";
  titleInput.value = "";
}

function previewImage(file) {
  if (!file.type.startsWith('image/')) {
    preview.innerHTML = "Please select a valid image.";
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    preview.innerHTML = "";
    const img = document.createElement('img');
    img.src = e.target.result;
    img.style.maxWidth = "300px";
    img.style.maxHeight = "300px";
    img.style.marginTop = "10px";
    preview.appendChild(img);
    fileInput.dataset.base64 = e.target.result;
  };
  
  reader.readAsDataURL(file);
}

// --- Event Handler Helpers ---
function login() {
  const user = auth.currentUser;
  if (!user) signInWithPopup(auth, provider)
              .catch(console.error);
  else signOut(auth)
        .catch(console.error);
}

function sendMessage() {
  const message = messageInput.value.trim();
  if (!message) return alert("Please enter a message.");
  writeUserMessage(message).then(() => messageInput.value = "");
}

function inputFile() {
  const file = fileInput.files[0];
  if (file) previewImage(file);
} 

async function submitFile() {
  const file = fileInput.files[0];
  const title = titleInput.value.trim();
  if (!file || !title) return alert("Please select a file and provide a title.");
  
  try {
    const uniqueName = `${file.name}_${Date.now()}`;
    const imgStorageRef = sRef(storage, 'images/' + uniqueName);

    const snapshot = await uploadBytes(imgStorageRef, file);
    console.log('✅ File uploaded');

    const url = await getDownloadURL(snapshot.ref);
    console.log('✅ Got URL:', url);

    await writeUserImage(url, title);
    console.log("✅ Metadata written");

  } catch (err) {
    console.error("❌ Something went wrong: " + err.message);
  }
}

function showMessages() {
  const user = auth.currentUser;
  checkIfAuth(user);
  if (user) loadUserMessages(user);
}

function showImages() {
  const user = auth.currentUser;
  checkIfAuth(user);
  if (user) loadUserImages(user);
}

// --- Event Handlers ---
async function setupEventListeners() {
  loginButton.addEventListener('click', login);
  messageButton.addEventListener('click', sendMessage);
  fileInput.addEventListener('change', inputFile);
  showMessagesButton.addEventListener('click', showMessages);
  showImagesButton.addEventListener('click', showImages);

  dataPlace.addEventListener('click', (e) => {
    const btn = e.target;
    const key = btn.dataset.key;
    const message = btn.dataset.message;
    const title = btn.dataset.title;
    const image = btn.dataset.image;

    if (btn.matches('.delete-message-button')) {
      if (confirm("Confirm delete?")) deleteMessage(key).then(btn.parentElement.remove());
    }
    else if (btn.matches('.delete-image-button')) {
      if (confirm("Confirm delete?")) deleteImage(key).then(btn.parentElement.remove());
    }
    else if (btn.matches('.edit-message-button')) {
      const newMessage = prompt("Enter new message:", message);
      if (newMessage != null && newMessage != "") editMessage(key, newMessage).then(console.log("message Eddited"));
    }
    else if (btn.matches('.edit-title-button')) {
      const newTitle = prompt("Enter new title:", title);
      if (newTitle != null && newTitle != "") editTitle(key, newTitle).then(console.log("Title eddited"));
    }
    else if (btn.matches('.edit-image-button')) {
      pendingEditKey = key;
      editImageInput.click();
      // const newImage = prompt("Enter new image URL:", image);
      // if (newImage != null && newImage != "") editImage(key, newImage).then(console.log("Image eddited"));
    }
  });

  editImageInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file || !pendingEditKey) return;

    try {
      const uniqueName = `${file.name}_${Date.now()}`;
      const imgStorageRef = sRef(storage, 'images/' + uniqueName);

      const snapshot = await uploadBytes(imgStorageRef, file);
      const url = await getDownloadURL(snapshot.ref);

      await editImage(pendingEditKey, url);
      console.log("✅ Image updated");

      pendingEditKey = null;
      editImageInput.value = "";

    } catch (err) {
      console.error("❌ Error editing image:", err);
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = 'Uploading...';

    submitFile().then(() => { 
      clearInputs();
      submitButton.disabled = false;
      submitButton.textContent = 'Upload';
    });

  });

  testButton.addEventListener('click', () => {
    clearInputs();
    console.log("Test button clicked");
  });

  window.addEventListener('DOMContentLoaded', clearInputs);
}

// --- Initialization ---
async function init() {
  await setupAuthPersistence();
  onAuthStateChanged(auth, onUserStateChanged);
  setupEventListeners();
}

init();
