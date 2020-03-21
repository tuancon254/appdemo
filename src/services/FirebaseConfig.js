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
  apiKey: 'AIzaSyDTM2DgOTnBsU0uJhHnjUmK0YJMrx-Pqsc',
  authDomain: 'it-hau-project.firebaseapp.com',
  databaseURL: 'https://it-hau-project.firebaseio.com',
  projectId: 'it-hau-project',
  storageBucket: 'it-hau-project.appspot.com',
  messagingSenderId: '366386610976',
  appId: '1:366386610976:web:39f46e2e8066f660758d45',
  measurementId: 'G-YZHNYX2YXR',
};

firebase.initializeApp(FirebaseConfig);

export default firebase;
