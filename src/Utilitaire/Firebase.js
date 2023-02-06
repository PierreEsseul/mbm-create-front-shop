import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDn8rXe7jGei7scrhjHTfVpsUmQq1GMJdA",
  authDomain: "madebyme-d630a.firebaseapp.com",
  projectId: "madebyme-d630a",
  storageBucket: "madebyme-d630a.appspot.com",
  messagingSenderId: "1027948586618",
  appId: "1:1027948586618:web:0e679645eaf4d5445c7dc3",
  measurementId: "G-GPRPNVF093"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);