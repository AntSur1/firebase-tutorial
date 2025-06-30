// --- Firebase Initialization ---
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, setPersistence, browserSessionPersistence} from "firebase/auth";
import { getDatabase, ref as dbRef, push, serverTimestamp, onValue, off} from "firebase/database";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL} from "firebase/storage";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage();
const provider = new GoogleAuthProvider();

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

// --- State ---
export let currentListenerRef = null;

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
    dataPlace.innerHTML = "";
  }
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

    let html = Object.values(data).map(({ message, timestamp }) => `
      <p><strong>Message:</strong> ${message}<br>
      <strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</p><hr>
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

    let html = Object.values(data).map(({ image, title, timestamp }) => `
      <div style="margin-bottom: 20px;">
        <strong>Title:</strong> ${title}<br>
        <strong>Time:</strong> ${new Date(timestamp).toLocaleString()}<br>
        <img src="${image}" alt="${title}" style="max-width: 300px; display: block; margin-top: 10px;">
      </div><hr>
    `).reverse().join("");

    dataPlace.innerHTML = html;
  });
}

// --- Database Write ---
function writeUserMessage(message) {
  const user = auth.currentUser;
  if (!user) return alert("Not logged in");
  const messagesRef = dbRef(db, `users/${user.uid}/messages`);
  return push(messagesRef, { message, timestamp: serverTimestamp() });
}

function writeUserImage(imageData, title) {
  const user = auth.currentUser;
  if (!user) return Promise.reject("Not logged in");
  const imagesRef = dbRef(db, `users/${user.uid}/images`);
  return push(imagesRef, { image: imageData, title, timestamp: serverTimestamp() });
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
  if (user) loadUserMessages(user);
}

function showImages() {
  const user = auth.currentUser;
  if (user) loadUserImages(user);
}

// --- Event Handlers ---
async function setupEventListeners() {
  loginButton.addEventListener('click', login);
  messageButton.addEventListener('click', sendMessage);
  fileInput.addEventListener('change', inputFile);
  showMessagesButton.addEventListener('click', showMessages);
  showImagesButton.addEventListener('click', showImages);

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
