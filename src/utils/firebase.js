// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrgp9PMApKtC9R3WZhj_IT-xFdlQ3GHEo",
  authDomain: "netflixgpt-4a702.firebaseapp.com",
  projectId: "netflixgpt-4a702",
  storageBucket: "netflixgpt-4a702.firebasestorage.app",
  messagingSenderId: "467865878085",
  appId: "1:467865878085:web:78bbca9ca6b67359806d2c",
  measurementId: "G-MTLP849M24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();