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
    document.getElementById('profile').src = user.photoURL || "";
    document.getElementById('login').textContent = "Log out";
    loadUserMessages(user);
  } else {
    console.log("⛔ No user signed in.");
    document.getElementById('profile').src = "";
    document.getElementById('login').textContent = "Login with Google";
    document.getElementById('displayData').innerHTML = "";
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
  document.getElementById('displayData').innerHTML = "Loading messages...";
  detachPreviousListener();

  const messagesRef = ref(db, `users/${user.uid}/messages`);
  currentListenerRef = messagesRef;

  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      document.getElementById('displayData').innerHTML = "No messages found.";
      return;
    }

    let html = Object.values(data).map(({ message, timestamp }) => `
      <p><strong>Message:</strong> ${message}<br>
      <strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</p><hr>
    `).join("");
    
    document.getElementById('displayData').innerHTML = html;
  });
}

function loadUserImages(user) {
  document.getElementById('displayData').innerHTML = "Loading images...";
  detachPreviousListener();

  const imagesRef = ref(db, `users/${user.uid}/images`);
  currentListenerRef = imagesRef;

  onValue(imagesRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      document.getElementById('displayData').innerHTML = "No images found.";
      return;
    }

    let html = Object.values(data).map(({ image, title, timestamp }) => `
      <div style="margin-bottom: 20px;">
        <strong>Title:</strong> ${title}<br>
        <strong>Time:</strong> ${new Date(timestamp).toLocaleString()}<br>
        <img src="${image}" alt="${title}" style="max-width: 300px; display: block; margin-top: 10px;">
      </div><hr>
    `).join("");
    
    document.getElementById('displayData').innerHTML = html;
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
  document.querySelector('#uploadImage input[name="file"]').value = "";
  document.getElementById('preview').innerHTML = "";
  document.getElementById('titleInput').value = "";
}

function previewImage(file) {
  if (!file.type.startsWith('image/')) {
    document.getElementById('preview').innerHTML = "Please select a valid image.";
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    document.getElementById('preview').innerHTML = "";
    const img = document.createElement('img');
    img.src = e.target.result;
    img.style.maxWidth = "300px";
    img.style.maxHeight = "300px";
    img.style.marginTop = "10px";
    document.getElementById('preview').appendChild(img);
    document.querySelector('#uploadImage input[name="file"]').dataset.base64 = e.target.result;
  };
  reader.readAsDataURL(file);
}

// --- Event Handlers ---
function setupEventListeners() {
  document.getElementById('login').addEventListener('click', () => {
    const user = auth.currentUser;
    if (!user) signInWithPopup(auth, provider).catch(console.error);
    else signOut(auth).catch(console.error);
  });

  document.getElementById('messageButton').addEventListener('click', () => {
    const message = document.getElementById('messageInput').value.trim();
    if (!message) return alert("Please enter a message.");
    writeUserMessage(message).then(() => document.getElementById('messageInput').value = "");
  });

  document.querySelector('#uploadImage input[name="file"]').addEventListener('change', () => {
    const file = document.querySelector('#uploadImage input[name="file"]').files[0];
    if (file) previewImage(file);
  });

  document.getElementById('uploadImage').addEventListener('submit', (e) => {
    e.preventDefault();
    const file = document.querySelector('#uploadImage input[name="file"]').files[0];
    const title = document.getElementById('titleInput').value.trim();
    if (!file || !title) return alert("Please select a file and provide a title.");
    writeUserImage(document.querySelector('#uploadImage input[name="file"]').dataset.base64, title)
      .then(() => {
        console.log("✅ Image uploaded");
        clearInputs();
      })
      .catch(err => alert("❌ Upload failed: " + err));
  });

  document.getElementById('showMessages').addEventListener('click', () => {
    const user = auth.currentUser;
    if (user) loadUserMessages(user);
  });

  document.getElementById('showImages').addEventListener('click', () => {
    const user = auth.currentUser;
    if (user) loadUserImages(user);
  });

  document.getElementById('test').addEventListener('click', () => {
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
