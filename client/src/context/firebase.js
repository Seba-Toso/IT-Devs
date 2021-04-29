import firebase from 'firebase';

const  firebaseApp = firebase.initializeApp({
 
    apiKey: "AIzaSyCHzkIHv7JGq27ER_uDeKR4BvZ0sLtM5Ew",
    authDomain: "it-devs-web-site-f4b34.firebaseapp.com",
    projectId: "it-devs-web-site-f4b34",
    storageBucket: "it-devs-web-site-f4b34.appspot.com",
    messagingSenderId: "589797242023",
    appId: "1:589797242023:web:5457876b04899c00b05782"
 
})

let isAuthenticated = false
firebase.auth().onAuthStateChanged( user => user? isAuthenticated=true : false)

const db = firebase.firestore();

export { db, firebaseApp, isAuthenticated }

