// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js"
// Firestore
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd7T4zu8P_WXIkNaruhpvogGYtTN1KWi4",
  authDomain: "diario-digital-67f4a.firebaseapp.com",
  projectId: "diario-digital-67f4a",
  storageBucket: "diario-digital-67f4a.appspot.com",
  messagingSenderId: "33848349005",
  appId: "1:33848349005:web:4ea0e619162f72345aa704"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);
;
// Inicializar Firestore
export const db = getFirestore();
// Operaciones CRUD
export const createTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTask = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);