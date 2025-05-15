// --- Firebase Initialization ---
import { initializeApp } from "firebase/app";
import {
  getAuth, signInWithPopup, signOut, GoogleAuthProvider,
  onAuthStateChanged, setPersistence, browserSessionPersistence
} from "firebase/auth";
import {
  getDatabase, ref, push, serverTimestamp, onValue, off
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDHhEExzVDJHlzwOjQSJka9qLfLpsjgNHA",
  authDomain: "testpage-ad7e1.firebaseapp.com",
  databaseURL: "https://testpage-ad7e1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testpage-ad7e1",
  storageBucket: "testpage-ad7e1.firebasestorage.app",
  messagingSenderId: "338672007872",
  appId: "1:338672007872:web:d657aa205706bb37ee4b25",
  measurementId: "G-DDTH2KFQ5T"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

// --- DOM Elements ---
const testButton = document.getElementById('test');
const loginButton = document.getElementById('login');
const messageButton = document.getElementById('messageButton');
const messageInput = document.getElementById('messageInput');
const titleInput = document.getElementById('titleInput');
const dataPlace = document.getElementById('displayData');
const profilePic = document.getElementById('profile');
const form = document.getElementById('uploadImage');
const fileInput = document.querySelector('#uploadImage input[name="file"]');
const preview = document.getElementById('preview');
const showMessagesButton = document.getElementById('showMessages');
const showImagesButton = document.getElementById('showImages');

// --- State ---
let currentListenerRef = null;

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
    loadUserMessages(user);
  } else {
    console.log("⛔ No user signed in.");
    profilePic.src = "";
    loginButton.textContent = "Login with Google";
    dataPlace.innerHTML = "";
  }
}

// --- Database Read/Write ---
function detachPreviousListener() {
  if (currentListenerRef) {
    off(currentListenerRef);
    currentListenerRef = null;
  }
}

function loadUserMessages(user) {
  dataPlace.innerHTML = "Loading messages...";
  detachPreviousListener();

  const messagesRef = ref(db, `users/${user.uid}/messages`);
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
    `).join("");

    dataPlace.innerHTML = html;
  });
}

function loadUserImages(user) {
  dataPlace.innerHTML = "Loading images...";
  detachPreviousListener();

  const imagesRef = ref(db, `users/${user.uid}/images`);
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
    `).join("");

    dataPlace.innerHTML = html;
  });
}

function writeUserMessage(message) {
  const user = auth.currentUser;
  if (!user) return alert("Not logged in");
  const messagesRef = ref(db, `users/${user.uid}/messages`);
  return push(messagesRef, { message, timestamp: serverTimestamp() });
}

function writeUserImage(imageData, title) {
  const user = auth.currentUser;
  if (!user) return Promise.reject("Not logged in");
  const imagesRef = ref(db, `users/${user.uid}/images`);
  return push(imagesRef, { image: imageData, title, timestamp: serverTimestamp() });
}

// --- UI Helpers ---
function clearInputs() {
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

// --- Event Handlers ---
function setupEventListeners() {
  loginButton.addEventListener('click', () => {
    const user = auth.currentUser;
    if (!user) signInWithPopup(auth, provider).catch(console.error);
    else signOut(auth).catch(console.error);
  });

  messageButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (!message) return alert("Please enter a message.");
    writeUserMessage(message).then(() => messageInput.value = "");
  });

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) previewImage(file);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const file = fileInput.files[0];
    const title = titleInput.value.trim();
    if (!file || !title) return alert("Please select a file and provide a title.");
    writeUserImage(fileInput.dataset.base64, title)
      .then(() => {
        console.log("✅ Image uploaded");
        clearInputs();
      })
      .catch(err => alert("❌ Upload failed: " + err));
  });

  showMessagesButton.addEventListener('click', () => {
    const user = auth.currentUser;
    if (user) loadUserMessages(user);
  });

  showImagesButton.addEventListener('click', () => {
    const user = auth.currentUser;
    if (user) loadUserImages(user);
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
