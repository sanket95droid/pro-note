// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "pro-note-adc70.firebaseapp.com",
  projectId: "pro-note-adc70",
  storageBucket: "pro-note-adc70.appspot.com",
  messagingSenderId: "60392704409",
  appId: "1:60392704409:web:ae1ae59b3820ad3965ab08",
  measurementId: "G-C6V88JTVX6"
};

import {isSupported } from "firebase/analytics";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export const storage = getStorage(app);

export async function uploadFileToFirebase(image_url: string, name: string) {
    try {
      const response = await fetch(image_url);
      const buffer = await response.arrayBuffer();
      const file_name = name.replace(" ", "") + Date.now + ".jpeg";
      const storageRef = ref(storage, file_name);
      await uploadBytes(storageRef, buffer, {
        contentType: "image/jpeg",
      });
      const firebase_url = await getDownloadURL(storageRef);
      return firebase_url;
    } catch (error) {
      console.error(error);
    }
  }