// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALKN9DEQqTFX7H1PmUYBOnKe91tHHccWM",
  authDomain: "fir-auth-948e1.firebaseapp.com",
  projectId: "fir-auth-948e1",
  storageBucket: "fir-auth-948e1.appspot.com",
  messagingSenderId: "51474905103",
  appId: "1:51474905103:web:9cdd742752569e18f88b7a"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// Exporting auth to get the methods of authentication
// To create firebase email authentication we need to enable email authentication
export const auth = firebase.auth();  

// Need to create firestore database inside the particular web app in firebase
const firestore = firebase.firestore();

// Exported database with created collections from firestore
export const database = {
    users: firestore.collection('users')
}

export const storage = firebase.storage();