const { initializeApp } = require('require/app');
const { getFirestore } = require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBFcZ6JCd3XW5v24KGH2gqy3S5uFAgdfkM",
  authDomain: "meetvideo-room.firebaseapp.com",
  projectId: "meetvideo-room",
  storageBucket: "meetvideo-room.appspot.com",
  messagingSenderId: "857689932198",
  appId: "1:857689932198:web:5aac337701f23388d20f67",
  measurementId: "G-MBTJXLR9E6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


