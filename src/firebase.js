import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDKCd-zd8xySK9BezHvRPI1axkkXbST00",
  authDomain: "slack-clone-73f46.firebaseapp.com",
  projectId: "slack-clone-73f46",
  storageBucket: "slack-clone-73f46.appspot.com",
  messagingSenderId: "351156433240",
  appId: "1:351156433240:web:d0e278d7a5c63d7b2c352d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
