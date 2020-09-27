import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCSkVjZrGgEqJoP06yaQFRKVO33WwZikgI",
    authDomain: "manufit78-8aa0b.firebaseapp.com",
    databaseURL: "https://manufit78-8aa0b.firebaseio.com",
    projectId: "manufit78-8aa0b",
    storageBucket: "manufit78-8aa0b.appspot.com",
    messagingSenderId: "80829369675",
    appId: "1:80829369675:web:595d644f7eb9daa9456cce",
    measurementId: "G-JDKCG1LC56"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();

  export {
    firebase,
    db
  }

