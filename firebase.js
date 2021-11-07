import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDcLW2y1F9odaykFjhWcYysZfUs22NPelo",
    authDomain: "instagram-7f3a3.firebaseapp.com",
    projectId: "instagram-7f3a3",
    storageBucket: "instagram-7f3a3.appspot.com",
    messagingSenderId: "171864294693",
    appId: "1:171864294693:web:f2e686efc486e60a5e06cc"
  };

  const app = !getApps.length? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();

  export { app, db, storage};