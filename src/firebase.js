import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDoiV-33Ts9jNdSDzuh4U7eSRAqvMFeHHc",
  authDomain: "fb-clone-8b1ccc.firebaseapp.com",
  databaseURL: "https://fb-clone-8b1ccc.firebaseio.com",
  projectId: "fb-clone-8b1ccc",
  storageBucket: "fb-clone-8b1ccc.appspot.com",
  messagingSenderId: "1058730359097",
  appId: "1:1058730359097:web:8fd7fb3561ea37ff1e90e8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;