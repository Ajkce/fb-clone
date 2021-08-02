import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV5gjWBvcxpFO0vVovwRRLMRS3HNMs1s4",
  authDomain: "fb-development-cd676.firebaseapp.com",
  projectId: "fb-development-cd676",
  storageBucket: "fb-development-cd676.appspot.com",
  messagingSenderId: "340248898210",
  appId: "1:340248898210:web:018d7bb7b4596f93dd85fb",
  measurementId: "G-LV18905E78"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;



