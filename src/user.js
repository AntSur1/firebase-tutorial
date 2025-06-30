
import { initializeApp } from "firebase/app";
import { getDatabase, ref as dbRef, onValue, off} from "firebase/database";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// --- DOM Elements ---
const showMessagesButton = document.getElementById('showMessages');
const showImagesButton = document.getElementById('showImages');
const dataPlace = document.getElementById('displayData');

// --- State ---
let currentListenerRef = null;

function detachPreviousListener() {
  if (currentListenerRef) {
    off(currentListenerRef);
    currentListenerRef = null;
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

const user = {uid: "wgDE9laS5FaN6FCwDGK467xlkXB2"}

// --- Event Handelers ---
showMessagesButton.addEventListener('click', () => {loadUserMessages(user)});
showImagesButton.addEventListener('click', () => {loadUserImages(user)});

loadUserMessages(user);