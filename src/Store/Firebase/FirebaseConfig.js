/* import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/storage'; */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1qkspazyFtr6bpi-sKsKX9L01pX2yACc",
    authDomain: "my-app-677c3.firebaseapp.com",
    projectId: "my-app-677c3",
    storageBucket: "my-app-677c3.appspot.com",
    messagingSenderId: "655401554986",
    appId: "1:655401554986:web:60e65360cf85b459c2df53",
    measurementId: "G-JFER104922"
  };
 
  export default firebase.initializeApp(firebaseConfig);

  