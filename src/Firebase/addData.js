// Import the necessary Firebase modules
import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const collectionRef = db.collection("MyProducts");


export default async function addData(data) {
    try {
      await collectionRef.add(data)
      console.log('Document written with ID:');
      
    } catch (error) {
        console.error('Error adding document:', error);
    }
  };
