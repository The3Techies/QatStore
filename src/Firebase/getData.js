import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const collectionRef = db.collection("MyProducts");

export default async function  getData () {
    const products = []
    try {
      const querySnapshot = await collectionRef.get()
      querySnapshot.forEach((doc) => {
        // Access individual document data using doc.data()
        const docId = doc.id
        const data = doc.data()
        data.id = docId
        // data.push(docId)
        // Do something with the data
        products.push(data)
      })
      return products
    } catch (error) {
      return []
    }
  };