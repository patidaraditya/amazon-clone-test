// Import the functions you need from the SDKs you need
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALsTL8uyzGEpA7sHGWRM2-scA-PcVJJhI",
  authDomain: "clone-2292e.firebaseapp.com",
  projectId: "clone-2292e",
  storageBucket: "clone-2292e.appspot.com",
  messagingSenderId: "664035625334",
  appId: "1:664035625334:web:f336b53b4b2e47549ed257",
  measurementId: "G-L13ZD59J1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // const user = res.user;

  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  db,
  auth,
  analytics,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
