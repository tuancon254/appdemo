/**
 *
 * @flow
 * @format
 */

 import * as firebase from 'firebase/app';
 import 'firebase/auth';
 import 'firebase/firestore';
 import 'firebase/database';

 const FirebaseConfig = {
    apiKey: "AIzaSyBVMaHLwqeFDNddBHP9mjk8sl28MvnQg0A",
    authDomain: "test-fd4a2.firebaseapp.com",
    databaseURL: "https://test-fd4a2.firebaseio.com",
    projectId: "test-fd4a2",
    storageBucket: "test-fd4a2.appspot.com",
    messagingSenderId: "900340429270",
    appId: "1:900340429270:web:2d4cb4a",
 }

firebase.initializeApp(FirebaseConfig);

export default firebase;
