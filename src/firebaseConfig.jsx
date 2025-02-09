import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";   
const firebaseConfig = {
    apiKey: "AIzaSyDXfvaLSLNdP5mazuujk-yqY-WanZ3mlZo",
    authDomain: "movie-recommendation-7ebc1.firebaseapp.com",
    projectId: "movie-recommendation-7ebc1",
    storageBucket: "movie-recommendation-7ebc1.appspot.com", // Corrected storageBucket
    messagingSenderId: "69865121383",
    appId: "1:69865121383:web:653d63e7f567ea966b96c2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;
