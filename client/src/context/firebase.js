import firebase from 'firebase';

const  firebaseApp = firebase.initializeApp({
 
    apiKey: "AIzaSyCX2_NH_ehyQmZp8kr0MR3gFHKevXvGK0g",
    authDomain: "it-devs-d161e.firebaseapp.com",
    projectId: "it-devs-d161e",
    storageBucket: "it-devs-d161e.appspot.com",
    messagingSenderId: "715389286066",
    appId: "1:715389286066:web:847ba11c3aebb84bf13bab"
 
})

let isAuthenticated = false
firebase.auth().onAuthStateChanged( user => user? isAuthenticated=true : false)

const db = firebase.firestore();

export { db, firebaseApp, isAuthenticated }

