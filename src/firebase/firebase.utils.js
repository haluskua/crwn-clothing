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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
