import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCk2pL_ERnXVxz8UA9yPOYnuCOOebxRJkM",
  authDomain: "crwn-db-68df6.firebaseapp.com",
  databaseURL: "https://crwn-db-68df6.firebaseio.com",
  projectId: "crwn-db-68df6",
  storageBucket: "crwn-db-68df6.appspot.com",
  messagingSenderId: "290525787968",
  appId: "1:290525787968:web:728fdaccdc3685db366ca5",
  measurementId: "G-Y26MDXME9R",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
