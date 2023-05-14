import firestore from "./firestore";

import app from "./firebase";
import {collection,getDocs,collectionGroup,setDoc,addDoc,doc,deleteDoc} from 'firebase/firestore';

export async function getCollection(collectionName) {
  return await  getDocs(collection(firestore,collectionName)).then(
    (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
 
      console.log(newData);
      return newData;
    }
  );
}

export async function deleteRecord(collectionName, docId) {
  try {
    const docRef = await doc(collection(firestore, collectionName), docId);
    await deleteDoc(docRef);
    console.log("Document deleted successfully!");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}




// export default function setHotelsData(hotelsList){
//     const res=hotelsList.map(async hotel=>{
//       addDoc(collection(firestore,"hotels"),hotel);
//     });
//     console.log(res);

// }






export async function getCollectionCounts() {
  const response = await getCollection('Professions');
    const d = response.filter(item => item['Profession'] === 'Doctor');


    const p=await getCollection('Patient');
    const m=await getCollection('Medicine');
    const a=await getCollection('Approved Appointments');
    console.log(a);
    return {
      medicine:m.length,
      doctor:d.length,
      patient:p.length,
      appointment:a.length
    }

  // await db.listCollections()
  // .then(snapshot=>{
  //     snapshot.forEach(snaps => {
  //       console.log(snaps["_queryOptions"].collectionId); // LIST OF ALL COLLECTIONS
  //     })
  // })
  // .catch(error => console.error(error));
  // collections.forEach(collection => {
    // counts[collection.id] = collection.size;
  // });
  // return counts;
}