import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage" ;

const firebaseConfig = {
    apiKey: "AIzaSyBQNlLrzbKDA6ak_IR6pakUYaRTE01nqLg",
    authDomain: "chat-37c74.firebaseapp.com",
    projectId: "chat-37c74",
    storageBucket: "chat-37c74.appspot.com",
    messagingSenderId: "722550347128",
    appId: "1:722550347128:web:566dc4eb1728231126a48d"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
