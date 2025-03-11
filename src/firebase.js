// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "access token",
  authDomain: "research-gpt-d84e3.firebaseapp.com",
  projectId: "access token",
  storageBucket: "research-gpt-d84e3.firebasestorage.app",
  messagingSenderId: "access token",
  appId: "access token",
  measurementId: "access token"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };