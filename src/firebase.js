// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBP3Vj7P3dSpqWUphyB-dFwBY0EgWIL24U",
  authDomain: "facebookclone-8a4b4.firebaseapp.com",
  databaseURL: "https://facebookclone-8a4b4.firebaseio.com",
  projectId: "facebookclone-8a4b4",
  storageBucket: "facebookclone-8a4b4.appspot.com",
  messagingSenderId: "672556157921",
  appId: "1:672556157921:web:41ced094aad3565975e0a0",
  measurementId: "G-MT4C5X1J52"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
