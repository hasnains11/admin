import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Login from "./components/Login";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore ,collection,getDocs} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotAnAdmin from "./components/NotAnAdmin";
import app from './services.js/firebase';
import firestore from './services.js/firestore';
import { getCollection } from "./services.js/allServices";

// const firebaseConfig = {
//   apiKey: "AIzaSyAvatMOhy5nNPK1WeJoI0nxho4b77efCxA",
//   authDomain: "medicure-23880.firebaseapp.com",
//   databaseURL: "https://medicure-23880-default-rtdb.firebaseio.com",
//   projectId: "medicure-23880",
//   storageBucket: "medicure-23880.appspot.com",
//   messagingSenderId: "999462725047",
//   appId: "1:999462725047:web:a87b8fa8959a294683f432",
//   measurementId: "G-KFJ0SS6EJ2",
// };

// const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// const firestore = getFirestore(app);

getCollection('Doctor');

console.log(app.status);
console.log(app.name); //

//  var auth=firebase.auth();
const adminEmail = "wasiqfayaz07@gmail.com";

const signInUser = async (email, password) => {
  if(email== adminEmail){
  var currentUser = await signInWithEmailAndPassword(auth, email, password);
  return true;
  }
  return false;
  
};

const signOutUser=async()=>{
  await signOut(auth);
}

function App() {
  

  const [user,setUser] = useAuthState(auth);

 

  var doctor = [];
  // const [logged, setlogged] = useState(false);

  console.log(user);
 
  // console.log(user.status);




  return (
    !(user && user.email==adminEmail)  ? <><Login status={user} authenticate={signInUser} ></Login><ToastContainer /></>:
    <><Main></Main><ToastContainer /></>
  )

 
}

export default App;
