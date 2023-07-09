import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  apiKey: "AIzaSyBAH2FoTDowG6ft9-ovZQrUihS4MYnwuoo",
  authDomain: "contact-list-e26b0.firebaseapp.com",
  projectId: "contact-list-e26b0",
  storageBucket: "contact-list-e26b0.appspot.com",
  messagingSenderId: "92965561941",
  appId: "1:92965561941:web:855f05a28e0234ca4816dc",
  measurementId: "G-ZY4DBCJWGY"
});

var db = firebaseApp.firestore();

export { db };