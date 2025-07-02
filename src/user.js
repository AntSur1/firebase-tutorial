
import { initializeApp } from "firebase/app";
import { getDatabase, ref as dbRef, get} from "firebase/database";
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Le-LXUrAAAAAAxKm034g5E9dpEN9KlLcRaOgZcG'),
  isTokenAutoRefreshEnabled: true
});

// --- DOM Elements ---
const showMessagesButton = document.getElementById('showMessages');
const showImagesButton = document.getElementById('showImages');
const dataPlace = document.getElementById('displayData');

// --- Database Read ---
async function loadUserMessages(user) {
  dataPlace.innerHTML = "Loading messages...";

  const messagesRef = dbRef(db, `users/${user.uid}/messages`);

  try {
    const snapshot = await get(messagesRef);
    const data = snapshot.val();

    if (!data) {
      dataPlace.innerHTML = "No messages found.";
      return;
    }

    let html = Object.values(data).map(({ message, timestamp }) => `
      <div>
        <span><strong>Message:</strong> ${message}</span>
        <br>
        <span><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</span>
        <hr>
      </div>
    `).reverse().join("");

    dataPlace.innerHTML = html;

  } catch (error) {
    console.error("Failed to load messages:", error);
    dataPlace.innerHTML = "Error loading messages.";
  }
}

async function loadUserImages(user) {
  dataPlace.innerHTML = "Loading images...";

  const imagesRef = dbRef(db, `users/${user.uid}/images`);


  try {
    const snapshot = await get(imagesRef);
    const data = snapshot.val();

    if (!data) {
      dataPlace.innerHTML = "No images found.";
      return;
    }

    let html = Object.values(data).map(({ image, title, timestamp }) => `
      <div style="margin-bottom: 20px;">
        <span><strong>Title:</strong> ${title}<span>
        <br>
        <span><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</span>
        <br>
        <span><strong>Image ↓</strong></span>
        <br>
        <img src="${image}" alt="${title}" style="max-width: 300px; display: block; margin-top: 10px;">
        <hr>
        </div>
    `).reverse().join("");

    dataPlace.innerHTML = html;
  } catch (error) {
    console.error("Failed to load images:", error);
    dataPlace.innerHTML = "Error loading images.";
  }
}

const user = {uid: "wgDE9laS5FaN6FCwDGK467xlkXB2"}

// --- Event Handelers ---
showMessagesButton.addEventListener('click', () => {loadUserMessages(user)});
showImagesButton.addEventListener('click', () => {loadUserImages(user)});

loadUserMessages(user);