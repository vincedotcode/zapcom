import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebase = initializeApp({
    apiKey: "AIzaSyC_NaEJ22z8Qxp6oI0KxFhBZZmuoY7ssVk",
    authDomain: "zapcom-a83b5.firebaseapp.com",
    projectId: "zapcom-a83b5",
    storageBucket: "zapcom-a83b5.appspot.com",
    messagingSenderId: "688808098829",
    appId: "1:688808098829:web:00dbd0a2aa8ea7969be944",
    measurementId: "G-VVT0H5XFFC"
});

export const auth = getAuth(firebase);