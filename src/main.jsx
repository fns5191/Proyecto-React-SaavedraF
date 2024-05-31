import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGTOsPTZ5i66YwTJSsv70yCmryMEI7AH4",
  authDomain: "cosas-innecesarias.firebaseapp.com",
  projectId: "cosas-innecesarias",
  storageBucket: "cosas-innecesarias.appspot.com",
  messagingSenderId: "750716737340",
  appId: "1:750716737340:web:0bed24fb604532f5a0b039"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
