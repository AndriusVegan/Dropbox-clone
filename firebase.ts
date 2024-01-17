import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7-48SMPRqXsDJr2sgR7VO1HJw4XKJMcs",
  authDomain: "dropbox-clone-1de67.firebaseapp.com",
  projectId: "dropbox-clone-1de67",
  storageBucket: "dropbox-clone-1de67.appspot.com",
  messagingSenderId: "1009716921572",
  appId: "1:1009716921572:web:afbc67edc6bc9280dd18f1",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
