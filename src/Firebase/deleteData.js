import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const collectionRef = db.collection("MyProducts");




export default async function deleteData(id) {
  try {
    await collectionRef.doc(id).delete()
  } catch (error) {
    console.error('Error removing document:', error);
  }
};