// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyApDfCOG85UUEY9wi31bL3VN9-UuKjAX6w",
  authDomain: "chat-d8279.firebaseapp.com",
  projectId: "chat-d8279",
  storageBucket: "chat-d8279.appspot.com",
  messagingSenderId: "23771890466",
  appId: "1:23771890466:web:c98562d536544480db9b7b",
  measurementId: "G-E2NS2MQXHW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
