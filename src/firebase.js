import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCMUo9VlF4sFxgwFMgQpn-Y9qmbXjiMCnE",
  authDomain: "chatapp-2243e.firebaseapp.com",
  projectId: "chatapp-2243e",
  storageBucket: "chatapp-2243e.appspot.com",
  messagingSenderId: "103091766776",
  appId: "1:103091766776:web:5f6ee92f27cc73eadb420d",
  measurementId: "G-V2V9J9GVBX"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db , auth }