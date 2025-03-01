import { firebase } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyClL6onpQ-G9odZRcWxs6vusK7BAGbqN3M",
    authDomain: "whats-app-clone-44e1c.firebaseapp.com",
    projectId: "whats-app-clone-44e1c",
    storageBucket: "whats-app-clone-44e1c.appspot.com",
    messagingSenderId: "81423822033",
    appId: "1:81423822033:web:18ba9169a7679127a8a9f0",
    measurementId: "G-8PN4B5E7HY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;