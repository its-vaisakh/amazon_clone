import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyANYGXBludMfl6Z0I8HeLRR4jU7xe9F3Bo",
  authDomain: "clone-f247e.firebaseapp.com",
  projectId: "clone-f247e",
  storageBucket: "clone-f247e.appspot.com",
  messagingSenderId: "730380222343",
  appId: "1:730380222343:web:a2e6c04339b194038b9d22",
  measurementId: "G-TBHHK3SLZV"
});



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
//by commenting this i got my result
//firebase.firestore.settings({ experimentalForceLongPolling: false })

const db = firebase.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }
