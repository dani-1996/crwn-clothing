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


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef= firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const {displayName,email} = userAuth
      const createdAt = new Date()

      try{
        await userRef.set({
          displayName,
           email, 
           createdAt, 
          ...additionalData
        })
        
      } catch(error) {
        console.log("error creating user", error)
      }
    }


    return userRef
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

 
  
  export default firebase;