
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBXXKeCYwsmLrhSOp6rTrJ6zMUtaYGAgY",
  authDomain: "facebook-clone-6b37d.firebaseapp.com",
  databaseURL: "https://facebook-clone-6b37d-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-6b37d",
  storageBucket: "facebook-clone-6b37d.appspot.com",
  messagingSenderId: "193534936182",
  appId: "1:193534936182:web:cafcdd92981ae95c650b57",
  measurementId: "G-5K8M9M81G2"
};

// initialize our app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initial database
const db = firebaseApp.firestore();

// set auth
const auth = firebase.auth();

// set provider
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;