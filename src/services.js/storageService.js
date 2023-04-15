import firestoreApp from "./firestore";
import firebase from "./firebase";
import { getStorage,ref, getDownloadURL, uploadBytes} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
export const storage= getStorage(firebase);


export const uploadLogo = async (file) => {
const storageRef = ref(storage, `lab-logos/${file.name}`);
await uploadBytes(storageRef, file);
const url = await getDownloadURL(storageRef);
return url;
}

export const uploadObject=async (collectionName,object)=>{
  const docRef = await addDoc(collection(firestoreApp,collectionName),object);
  console.log("Document written with ID: ", docRef.id);
  return docRef.id;
}

export const  getLabreports=async (labId)=>{
  
}