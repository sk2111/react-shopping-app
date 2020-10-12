import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAp73MP4kflG0Ynexsl7-_UtVZ53RCpiG4",
    authDomain: "crwn-db-3d17e.firebaseapp.com",
    databaseURL: "https://crwn-db-3d17e.firebaseio.com",
    projectId: "crwn-db-3d17e",
    storageBucket: "crwn-db-3d17e.appspot.com",
    messagingSenderId: "116176247314",
    appId: "1:116176247314:web:e0eb9398237dda4f4016cb",
    measurementId: "G-02QY45LFH1"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

export default firebase;