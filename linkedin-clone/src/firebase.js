import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAf7Tt6v2ridacJf6kHQALGGEu53CmB6WM",
    authDomain: "linkedin-clone-7ccff.firebaseapp.com",
    projectId: "linkedin-clone-7ccff",
    storageBucket: "linkedin-clone-7ccff.appspot.com",
    messagingSenderId: "168225369257",
    appId: "1:168225369257:web:ddeff1c3338b97809e0db8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };