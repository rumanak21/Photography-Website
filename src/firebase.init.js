// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT_wAEuq8sy-ow9dQOlOcCCA6pveBGTHg",
  authDomain: "wpg-roman.firebaseapp.com",
  projectId: "wpg-roman",
  storageBucket: "wpg-roman.appspot.com",
  messagingSenderId: "405148129985",
  appId: "1:405148129985:web:a34737eb9bec4d3a615240",
  measurementId: "G-MWS2BC8N7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;