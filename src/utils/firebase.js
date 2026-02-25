// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDejUgaIHrSajUQVIlKzUt9tesEGGd6ZtY",
    authDomain: "netflixgpt-c8aa3.firebaseapp.com",
    projectId: "netflixgpt-c8aa3",
    storageBucket: "netflixgpt-c8aa3.firebasestorage.app",
    messagingSenderId: "689838356969",
    appId: "1:689838356969:web:fe1364bed093645f4bb378",
    measurementId: "G-8P2EQBP3TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();