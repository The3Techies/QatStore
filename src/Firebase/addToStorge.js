import { firebaseConfig } from "./firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Storage service
const storage = getStorage();

// Upload the file
export default function addToStorge(file,imgId) {
  return new Promise((resolve, reject) => {
    const fileRef = ref(storage, `imgs/${imgId}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Handle progress updates, such as displaying a progress bar
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //   console.log("Upload progress:", progress + "%");
      },
      (error) => {
        // Handle unsuccessful upload
        console.error("Error uploading file:", error);
        reject(error);
      },
      () => {
        // Handle successful upload
        //   console.log("File uploaded successfully.");

        // Access the download URL of the uploaded file
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            // console.log("Download URL:", downloadURL);
            resolve(downloadURL);
          })
          .catch((error) => {
            console.error("Error retrieving download URL:", error);
            reject(error);
          });
      }
    );
  });
}
