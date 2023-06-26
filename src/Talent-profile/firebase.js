import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfLyBZfxSbCtkGG21vzSE8zGvGyl9udyM",
  authDomain: "ecommerce-38557.firebaseapp.com",
  projectId: "ecommerce-38557",
  storageBucket: "ecommerce-38557.appspot.com",
  messagingSenderId: "617529582277",
  appId: "1:617529582277:web:2caa2f6f18ecb75a2a06ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  default app;