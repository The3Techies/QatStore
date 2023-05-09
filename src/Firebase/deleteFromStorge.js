import { firebaseConfig } from "./firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const bucket = storage.ref();

export default async function deleteData(imgId) {
  const fileName = `imgs/${imgId}`;
  const fileRef = storage.ref().child(fileName);
  try {
    await fileRef.delete();
  } catch (error) {
    console.error("Error deleting file:", error);
  }
}
