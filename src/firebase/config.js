import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUdsS1hYdeN20XgDNoJ-B6LLdK8qQ2INk",
    authDomain: "olx-clone-9e499.firebaseapp.com",
    projectId: "olx-clone-9e499",
    storageBucket: "olx-clone-9e499.appspot.com",
    messagingSenderId: "25347406573",
    appId: "1:25347406573:web:9996811d0ee4f40679aae4",
    measurementId: "G-HYMSXRMS8B"
  };

export default firebase.initializeApp(firebaseConfig)