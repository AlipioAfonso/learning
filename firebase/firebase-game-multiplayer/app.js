import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

let firebaseApp;
//let firebaseAuth;


const firebaseConfig = {

    apiKey: "AIzaSyA2F27_vxVcJEIXLm6USWijDcnQfdHY2AE",

    authDomain: "multiplayer-game-demo-3e109.firebaseapp.com",

    databaseURL: "https://multiplayer-game-demo-3e109-default-rtdb.firebaseio.com",

    projectId: "multiplayer-game-demo-3e109",

    storageBucket: "multiplayer-game-demo-3e109.appspot.com",

    messagingSenderId: "634935993706",

    appId: "1:634935993706:web:1facc79280d872e3843113"

};



firebaseApp = initializeApp(firebaseConfig);
/*
firebaseAuth = initializeAuth(firebaseApp, {
  persistence: browserSessionPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
});
*/


var firebaseAuth = getAuth();

/*
 */

(function() {


    onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
            console.log(user)
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log("User is signed in");

        } else {
            console.log(user)
                // User is signed out
            console.log("User is signed out");
        }
    });




    signInAnonymously().catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage)
    })
})()