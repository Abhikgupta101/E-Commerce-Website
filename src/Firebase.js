
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBQRocpcuIcfsBmgIal4JUkMb40au5QOc8",
  authDomain: "reels-7f17f.firebaseapp.com",
  projectId: "reels-7f17f",
  storageBucket: "reels-7f17f.appspot.com",
  messagingSenderId: "885532721003",
  appId: "1:885532721003:web:ca20485c307430b885162e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users'),
    getTimestamp: firebase.firestore.FieldValue.getTimestamp //This used to show current post on top, not at last
}