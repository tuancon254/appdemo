/**
 * 
 * @flow
 * @format
 */

 import * as firebase from 'firebase/app';
 import 'firebase/auth';
 import 'firebase/firestore';

 const FirebaseConfig = {
  apiKey: "AIzaSyAsctHuW_u5KKfVswBeuhuRuAn4Uc47BWM",
  authDomain: "it-hau-120fc.firebaseapp.com",
  databaseURL: "https://it-hau-120fc.firebaseio.com",
  projectId: "it-hau-120fc",
  storageBucket: "it-hau-120fc.appspot.com",
  messagingSenderId: "516942380236",
  appId: "1:516942380236:web:422a3f98571b371a9e5669",
  measurementId: "G-VQPMQDVGME"
 }

firebase.initializeApp(FirebaseConfig);

export default firebase;