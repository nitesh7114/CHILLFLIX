import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyBLF15RJM8K9FuMNxCP3fd1qzi5zRDfHqM",
  authDomain: "chillflix-a38c5.firebaseapp.com",
  projectId: "chillflix-a38c5",
  storageBucket: "chillflix-a38c5.appspot.com",
  messagingSenderId: "721396484887",
  appId: "1:721396484887:web:d8679d343d21422394c552",
  measurementId: "G-8DGP774Q59"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;