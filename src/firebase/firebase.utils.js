import firebase from "firebase/compat/app"

import "firebase/compat/firestore";
import "firebase/compat/auth"

const config = {
    apiKey: "AIzaSyAOOwiIE3AtmKP5paC0vvwEYE0zF4jBuQw",
    authDomain: "crwn-db-65057.firebaseapp.com",
    projectId: "crwn-db-65057",
    storageBucket: "crwn-db-65057.appspot.com",
    messagingSenderId: "1081103493659",
    appId: "1:1081103493659:web:6473c8af223d97d0a166be"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;