import firebase from 'firebase';

const  firebaseApp = firebase.initializeApp({
 
    apiKey: "AIzaSyCDc0sSwZuDtisxkMNOSD6x6VebgIUSnWo",
    authDomain: "primerproyecto-d82ad.firebaseapp.com",
    databaseURL: "https://primerproyecto-d82ad-default-rtdb.firebaseio.com",
    projectId: "primerproyecto-d82ad",
    storageBucket: "primerproyecto-d82ad.appspot.com",
    messagingSenderId: "1087237858153",
    appId: "1:1087237858153:web:c60ed5447796eb90fb93f8",
 
})

const db = firebase.firestore();

export { db }