// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD59gF9PqXWxuQ4jb1831o-PynsO_Nn7N8",
  authDomain: "rental-and-booking-services.firebaseapp.com",
  projectId: "rental-and-booking-services",
  storageBucket: "rental-and-booking-services.firebasestorage.app",
  messagingSenderId: "133949315911",
  appId: "1:133949315911:web:c7ac341809813367bc4a62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;