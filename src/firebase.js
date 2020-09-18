import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXlDqkc0D5u0Bub24UWBJuFmnlNnm-Jl8",
  authDomain: "fir-53116.firebaseapp.com",
  databaseURL: "https://fir-53116.firebaseio.com",
  projectId: "fir-53116",
  storageBucket: "fir-53116.appspot.com",
  messagingSenderId: "647393544402",
  appId: "1:647393544402:web:f9d34190a3024c2bbdc50b",
  measurementId: "G-B7GVBE0ZCP",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
