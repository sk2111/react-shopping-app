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
export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch(e){
            console.log("Error creating User",e);
        }
    }
    return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

export default firebase;