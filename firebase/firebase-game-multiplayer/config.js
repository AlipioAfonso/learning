// Import the functions you need from the SDKs you need

import { getAuth, signInAnonymously, onAuthStateChanged } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.21.0/firebase-auth.min.js"

import { initializeApp } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.21.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyA2F27_vxVcJEIXLm6USWijDcnQfdHY2AE",

    authDomain: "multiplayer-game-demo-3e109.firebaseapp.com",

    databaseURL: "https://multiplayer-game-demo-3e109-default-rtdb.firebaseio.com",

    projectId: "multiplayer-game-demo-3e109",

    storageBucket: "multiplayer-game-demo-3e109.appspot.com",

    messagingSenderId: "634935993706",

    appId: "1:634935993706:web:1facc79280d872e3843113"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);