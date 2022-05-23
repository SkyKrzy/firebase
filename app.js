
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    listAll
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js';
//import { getFirestore, deleteDoc, updateDoc, getDoc, getDocs, setDoc, doc, where, query, collection

//} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-

const firebaseConfig = {
    apiKey: "AIzaSyC19Ii5EdFWfDJCrkMFOY-EkUdTG53Z-cM",
    authDomain: "fir-app-2e0bd.firebaseapp.com",
    projectId: "fir-app-2e0bd",
    storageBucket: "fir-app-2e0bd.appspot.com",
    messagingSenderId: "1057330633618",
    appId: "1:1057330633618:web:cacd8f003d0ca255a57f4b",
    measurementId: "G-DHQLZ33WVB"
};

// 1. Inicjalizacja aplikacji 
const app = initializeApp(firebaseConfig);
const storage = getStorage();

