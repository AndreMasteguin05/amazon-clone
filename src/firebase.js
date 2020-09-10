import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4hW8X0EE6Wk1gpNNz9cBc6_fNYqS4IIk",
  authDomain: "challenge-a4efc.firebaseapp.com",
  databaseURL: "https://challenge-a4efc.firebaseio.com",
  projectId: "challenge-a4efc",
  storageBucket: "challenge-a4efc.appspot.com",
  messagingSenderId: "63521309552",
  appId: "1:63521309552:web:e02f3217655ad83a5685b5",
  measurementId: "G-7K0LCN7N0Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
