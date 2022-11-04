// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgO5Tg-aWbwD7JszHraF0WKoyBj1AglCs",
    authDomain: "exchangario-9bc31.firebaseapp.com",
    projectId: "exchangario-9bc31",
    storageBucket: "exchangario-9bc31.appspot.com",
    messagingSenderId: "119262283789",
    appId: "1:119262283789:web:e3217857b8ca8fffe2ad44"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();