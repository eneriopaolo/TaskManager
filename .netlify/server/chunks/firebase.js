import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDlqxpDWRQha9y0lqN5WmJGxqrOuObBPlU",
  authDomain: "enerio-taskmanager.firebaseapp.com",
  projectId: "enerio-taskmanager",
  storageBucket: "enerio-taskmanager.appspot.com",
  messagingSenderId: "211484705713",
  appId: "1:211484705713:web:fc6704648a3b43a9ddb390",
  measurementId: "G-YN5QKM81HE"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
getFirestore(firebaseApp);
getAuth(firebaseApp);
