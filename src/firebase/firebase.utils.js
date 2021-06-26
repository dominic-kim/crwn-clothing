import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBVp-8ewbUXgvg2V4xz4N4wvpa-Wo3vVxE",
  authDomain: "crwn-db-5a36a.firebaseapp.com",
  projectId: "crwn-db-5a36a",
  storageBucket: "crwn-db-5a36a.appspot.com",
  messagingSenderId: "250784998920",
  appId: "1:250784998920:web:842c02b99bc256f23e53bd",
  measurementId: "G-SQJLNVX9ZV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;