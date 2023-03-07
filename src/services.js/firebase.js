import * as firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAvatMOhy5nNPK1WeJoI0nxho4b77efCxA",
    authDomain: "medicure-23880.firebaseapp.com",
    databaseURL: "https://medicure-23880-default-rtdb.firebaseio.com",
    projectId: "medicure-23880",
    storageBucket: "medicure-23880.appspot.com",
    messagingSenderId: "999462725047",
    appId: "1:999462725047:web:a87b8fa8959a294683f432",
    measurementId: "G-KFJ0SS6EJ2",
  };


const app = firebase.initializeApp(firebaseConfig);
export default app;
