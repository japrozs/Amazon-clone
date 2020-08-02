import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBtg3tQg2wMZC387f_ImQJx6W-Dbqlrzbk",
    authDomain: "clone-a7fac.firebaseapp.com",
    databaseURL: "https://clone-a7fac.firebaseio.com",
    projectId: "clone-a7fac",
    storageBucket: "clone-a7fac.appspot.com",
    messagingSenderId: "347679326048",
    appId: "1:347679326048:web:4f6c5ca5299ed41e676805",
    measurementId: "G-XZML76L5XR",
});

const auth = firebase.auth()

export {
    auth
};