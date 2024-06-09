// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjSiqSfPQTuGJGsWaaY2P0-IPKnxaZqEQ",

  authDomain: "linkedin-clone-65422.firebaseapp.com",

  projectId: "linkedin-clone-65422",

  storageBucket: "linkedin-clone-65422.appspot.com",

  messagingSenderId: "1019124133714",

  appId: "1:1019124133714:web:cbd8f00f0a4e53abd6d48b",

  measurementId: "G-FE8HCKZ9N3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
