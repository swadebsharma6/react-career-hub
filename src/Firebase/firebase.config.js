// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHb2gSLU-lw3HZ5j-NuZogkVZeWyy2fQ4",
  authDomain: "career-hub-1e245.firebaseapp.com",
  projectId: "career-hub-1e245",
  storageBucket: "career-hub-1e245.appspot.com",
  messagingSenderId: "739155246980",
  appId: "1:739155246980:web:c6d94ba01f2b2f041467d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;