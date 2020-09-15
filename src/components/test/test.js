import firebase from 'firebase/app';

import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('Z7Ayr1Zszo62ag3Vz0rb').collection('Cart Item').doc('GOIkRKMTIIzq56DpaKvq')

firestore.doc('/users/Z7Ayr1Zszo62ag3Vz0rb/Cart Items/GOIkRKMTIIzq56DpaKvq')
firestore.collection('/users/Z7Ayr1Zszo62ag3Vz0rb/Cart Item')