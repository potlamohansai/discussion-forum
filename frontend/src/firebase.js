// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1dUeAR9kL9vEfLTustlYF1IniptFNuA0",
  authDomain: "discussion-forum-f8bfe.firebaseapp.com",
  projectId: "discussion-forum-f8bfe",
  storageBucket: "discussion-forum-f8bfe.appspot.com",
  messagingSenderId: "743593540660",
  appId: "1:743593540660:web:2fe76d2ed492658053de61",
  measurementId: "G-LT4ZRN7MGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {auth, provider}