// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAm4a2FH6u_EHgV4BDOrVVr-H0uQgjxeho',
    authDomain: 'twitter-clone-66bb2.firebaseapp.com',
    projectId: 'twitter-clone-66bb2',
    storageBucket: 'twitter-clone-66bb2.appspot.com',
    messagingSenderId: '398022893626',
    appId: '1:398022893626:web:7ab9a3cbf15ae6fa9c5503',
    measurementId: 'G-HX2N1R9KE0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.firestore();
export default db;
