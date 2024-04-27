// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD4EgXIIQGoGve6RTHWlXs0fgkCDqdrVo",
  authDomain: "travol-explore-the-world.firebaseapp.com",
  projectId: "travol-explore-the-world",
  storageBucket: "travol-explore-the-world.appspot.com",
  messagingSenderId: "679337636051",
  appId: "1:679337636051:web:747749c414a8d93da2a426"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;