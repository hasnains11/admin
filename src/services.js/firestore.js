import app from './firebase';
import * as firestore from 'firebase/firestore';
// const admin = require("firebase-admin");
const firestoreApp = firestore.getFirestore(app);


// export const db = admin.firestore(app);
export default firestoreApp;
