// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMKhYtw2tZ4gNThcRm1_6290VDjxLUCUY",
  authDomain: "firenetwork-1d82b.firebaseapp.com",
  projectId: "firenetwork-1d82b",
  storageBucket: "firenetwork-1d82b.firebasestorage.app",
  messagingSenderId: "137849960220",
  appId: "1:137849960220:web:92bc5e8d901515b0d82cd9",
  measurementId: "G-V7NQ2GV7CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);