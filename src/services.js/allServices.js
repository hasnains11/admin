import firestore from "./firestore";

import app from "./firebase";
import {collection,getDocs,collectionGroup,setDoc,addDoc} from 'firebase/firestore';

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



// export default function setHotelsData(hotelsList){
//     const res=hotelsList.map(async hotel=>{
//       addDoc(collection(firestore,"hotels"),hotel);
//     });
//     console.log(res);

// }






export async function getCollectionCounts() {
  const d=await getCollection('Doctor');
    const p=await getCollection('Patient');
    const a=await getCollection('Approved Appointments');
    console.log(a);
    return {
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