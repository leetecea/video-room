import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDFx2rEivi2IDULE1bRul5iZemSvdBpTFo",
  authDomain: "video--room.firebaseapp.com",
  projectId: "video--room",
  storageBucket: "video--room.appspot.com",
  messagingSenderId: "346535750973",
  appId: "1:346535750973:web:a4ad6e53000cc11c1c2954",
  measurementId: "G-4W5B4TXKN1"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)