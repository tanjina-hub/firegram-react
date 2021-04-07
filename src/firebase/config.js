import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';  

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBP5Dm7PndapoJPbGYexPKhHQ2UAuy-D6s",
    authDomain: "firegram-ninja-bd0bd.firebaseapp.com",
    projectId: "firegram-ninja-bd0bd",
    storageBucket: "firegram-ninja-bd0bd.appspot.com",
    messagingSenderId: "789251744506",
    appId: "1:789251744506:web:e54e15d6224aab396f5f43"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };