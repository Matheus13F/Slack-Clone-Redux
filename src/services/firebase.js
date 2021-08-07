import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDnf5eMgTiFPgQmEbuqdyhU0BsTX4wM-o8",
  authDomain: "slack-2-clone.firebaseapp.com",
  projectId: "slack-2-clone",
  storageBucket: "slack-2-clone.appspot.com",
  messagingSenderId: "242858644925",
  appId: "1:242858644925:web:c6e655342821d0af142ed4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }