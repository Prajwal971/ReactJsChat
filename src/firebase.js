                                                            // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage" ;
                                                            // TODO: Add SDKs for Firebase products that you want to use
                                                            // https://firebase.google.com/docs/web/setup#available-libraries

                                                            // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-W742oGEncZws6e0jSyXRvoJUoS5UXfg",
  authDomain: "chat-9121d.firebaseapp.com",
  projectId: "chat-9121d",
  storageBucket: "chat-9121d.appspot.com",
  messagingSenderId: "879233353330",
  appId: "1:879233353330:web:6ac338be741bca142324eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
