import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD-z9jmxQTzMABFASre4w1W4OSbWjUVxLY",
    authDomain: "slack-2-9fea9.firebaseapp.com",
    projectId: "slack-2-9fea9",
    storageBucket: "slack-2-9fea9.appspot.com",
    messagingSenderId: "772519644553",
    appId: "1:772519644553:web:c9f2697ca601439471e558"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider,db};