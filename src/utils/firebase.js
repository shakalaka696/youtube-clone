// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-lSrmCkTErPNm-QGkRXjjRmyrwSizrbI",
  authDomain: "ytclone-22aa0.firebaseapp.com",
  projectId: "ytclone-22aa0",
  storageBucket: "ytclone-22aa0.firebasestorage.app",
  messagingSenderId: "514363531126",
  appId: "1:514363531126:web:76c3fe6bb2db2afa5e2457",
  measurementId: "G-P9XME1Z29J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);