import firestoreApp from "./firestore";
import firebase from "./firebase";
import { getStorage,ref, getDownloadURL, uploadBytes} from "firebase/storage";
import { collection, addDoc,getDocs,where ,query} from "firebase/firestore";
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


export const getBloodBankByName = async (name) => {
  
  const bloodBankCollectionRef = collection(firestoreApp, 'bloodbank');


  const q = query(bloodBankCollectionRef, where("name", "==", name));
var newObj=null;
   await getDocs(q).then(
    (querySnapshot) => {
      if (querySnapshot.empty) {
          return null;
        }

          const data = querySnapshot.docs[0];
          newObj={id:data.id,...data.data()};
          // return data;
         
      // const newData = querySnapshot[0].map((doc) => ({
        // ...doc.data(),
        // id: doc.id,
      // }
      // )
      
      // );
 
      // console.log(newData);
      // return newData;
    }
    
    
    );
  console.log(newObj);  
  return newObj;


  // const querySnapshot = await getDocs(where('name', '==', name, bloodBankCollectionRef));
  
  // if (querySnapshot.empty) {
  //   return null;
  // } else {
  //   const doc = querySnapshot.docs[0];
  //   const data = doc.data();
  //   return { id: doc.id, ...data };
  // }
}










export const  getLabreports=async (labId)=>{
  
}