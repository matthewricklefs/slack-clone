import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTP7IC6rymKXxrxNu9pHOGEJVbt2wCzlY",
  authDomain: "slack-clone-bdc9b.firebaseapp.com",
  projectId: "slack-clone-bdc9b",
  storageBucket: "slack-clone-bdc9b.appspot.com",
  messagingSenderId: "137363391324",
  appId: "1:137363391324:web:d544a2a297db954949b799",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
