// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQk543lIqrYNXrtueSiObFtMfPZWULRQA",
  authDomain: "netflixgpt-df760.firebaseapp.com",
  projectId: "netflixgpt-df760",
  storageBucket: "netflixgpt-df760.appspot.com",
  messagingSenderId: "625820594000",
  appId: "1:625820594000:web:5b06bd160258a5ab7c4655",
  measurementId: "G-LZW71B61P7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();