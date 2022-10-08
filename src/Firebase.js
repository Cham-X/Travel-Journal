import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
  
const firebaseConfig = {
  apiKey: "AIzaSyD6yIADxqcZGmEXuR-iECloIcnE-aJWlZA",
  authDomain: "traveljournal-aa656.firebaseapp.com",
  projectId: "traveljournal-aa656",
  storageBucket: "traveljournal-aa656.appspot.com",
  messagingSenderId: "661951257672",
  appId: "1:661951257672:web:fdcefc5b05dad6e370cc7d"
};
  
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;