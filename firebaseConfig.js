// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAPkD-scxdToVqeeElTcyScgGjxVs6pho",
  authDomain: "financial-shellhacks.firebaseapp.com",
  projectId: "financial-shellhacks",
  storageBucket: "financial-shellhacks.appspot.com",
  messagingSenderId: "121521606659",
  appId: "1:121521606659:web:9ed4617fe16ba6c4787e36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;