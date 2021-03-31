import firebase from 'firebase';

const  firebaseApp = firebase.initializeApp({
 
    apiKey: "AIzaSyA2aVp__bqyumeH2Cv1m3Mhi4bEynbAHS4",
    authDomain: "it-devs-web-site.firebaseapp.com",
    projectId: "it-devs-web-site",
    storageBucket: "it-devs-web-site.appspot.com",
    messagingSenderId: "56277694014",
    appId: "1:56277694014:web:49ed73d4c6f93bb62d436f"
 
})

const db = firebase.firestore();

export { db, firebaseApp }

