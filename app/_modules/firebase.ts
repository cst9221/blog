// Import the functions you need from the SDKs you need
import { FirebaseApp, getApp, initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCQ1CZGIUiB12aslkmtLZvS0TlJ7kFJnhc",
  authDomain: "cst9221-blog.firebaseapp.com",
  projectId: "cst9221-blog",
  storageBucket: "cst9221-blog.appspot.com",
  messagingSenderId: "511084031384",
  appId: "1:511084031384:web:1ab2c94e60fdc7cec60fed",
  measurementId: "G-98PK3W6Y86",
}

// Initialize Firebase
export let app: FirebaseApp

try {
  app = getApp("app")
} catch (e) {
  app = initializeApp(firebaseConfig, "app")
}

export const db = getFirestore(app)
export const analytics = getAnalytics(app)
