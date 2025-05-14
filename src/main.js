import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged, setPersistence, inMemoryPersistence, browserSessionPersistence  } from "firebase/auth";
import { getDatabase, ref, set, push, serverTimestamp, onValue   } from "firebase/database";

// Replace with your actual Firebase config:
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

// npm run dev
//https://console.firebase.google.com/u/0/project/testpage-ad7e1/database/testpage-ad7e1-default-rtdb/data
//https://firebase.google.com/docs/database/web/read-and-write
// https://chatgpt.com/


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

const testButton = document.getElementById('test');
const loginButton = document.getElementById('login');
const messageButton = document.getElementById('messageButton');
const messageInput = document.getElementById('messageInput');
const dataPlace = document.getElementById('displayData');
const profilePic = document.getElementById('profile');

setPersistence(auth, browserSessionPersistence).catch((error) => {
  console.error("❌ Failed to set persistence:", error);
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("✅ User is signed in:", user.displayName);
    profilePic.src = user.photoURL;
    enableDataRead(user);
  } else {
    console.log("⛔ No user is signed in.");
  }
});


function enableDataRead(user) {
  const userMessagesRef = ref(db, 'users/' + user.uid  + '/messages');
  onValue(userMessagesRef, (snapshot) => {
    const data = snapshot.val();
    let output = "";

    for (const messageId in data) {
      const messageData = data[messageId];
      const message = messageData.message;
      const timestamp = new Date(messageData.timestamp).toLocaleString();

      output += `<p><strong>Message:</strong> ${message}<br>`;
      output += `<strong>Time:</strong> ${timestamp}</p><hr>`;
    }

    dataPlace.innerHTML = output;
  });
}

function sendMessage() {
  const message = messageInput.value;

  if (message.trim() === "") {
    alert("Please enter a message.");
    return;
  }

  writeUserData(message);
  
  messageInput.value = "";
}


function writeUserData(message) {
  const user = auth.currentUser;

  if (!user) {
    alert("not logged in")
    return;
  }
  const userId = user.uid;

  const userMessagesRef = ref(db, 'users/' + userId + '/messages');
  push(userMessagesRef, {
    message: message,
    timestamp: serverTimestamp()
  })
  .then(() => {
    console.log("✅ Data written successfully");
  })
  .catch((error) => {
    console.error("❌ Write failed:", error);
  });
}

loginButton.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
  });

  console.log('Login clicked');
});

messageButton.addEventListener('click', () => {
  sendMessage();
})

testButton.addEventListener('click', () =>{
  console.log(auth.currentUser.uid);
});




