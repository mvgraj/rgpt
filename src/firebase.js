// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { defineAuth, secret } from '@aws-amplify/backend';

// const firebaseConfig = {
//   apiKeyapiKey: "AIzaSyCMQ_jRFLGwo-e3GP3vadPHuRIXk1ZcI9Q",
//   authDomain: "research-gpt-d84e3.firebaseapp.com",
//   projectId: "research-gpt-d84e3",
//   storageBucket: "research-gpt-d84e3.firebasestorage.app",
//   messagingSenderId: "667211054303",
//   appId: "1:667211054303:web:32c917d3bcf9d33830bd6a",
//   measurementId: "G-9NZVZ3XZDX"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
