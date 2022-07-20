
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCFd9UmWq0AOQlbpVaDfE27QyQ7YxP4BzY",
    authDomain: "portfolio-ca176.firebaseapp.com",
    projectId: "portfolio-ca176",
    storageBucket: "portfolio-ca176.appspot.com",
    messagingSenderId: "1057454760346",
    appId: "1:1057454760346:web:6b5055f6d3ff2eceb75a23",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);