/* import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/storage'; */
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMkwXdOFZjcijX-vgijFrfAPIXYx_-S3o",
  authDomain: "todo-app-17bad.firebaseapp.com",
  projectId: "todo-app-17bad",
  storageBucket: "todo-app-17bad.appspot.com",
  messagingSenderId: "120659254315",
  appId: "1:120659254315:web:9b03543a5711f2f8f85e6e",
  measurementId: "G-V9DRRGGH8K",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.initializeApp(firebaseConfig);
