// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAzMCgCH_xmS-Lm6hUHcn8e-pXKG6Db95U",
    authDomain: "whatsapp-clone-62ef7.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-62ef7-default-rtdb.firebaseio.com",
    projectId: "whatsapp-clone-62ef7",
    storageBucket: "whatsapp-clone-62ef7.appspot.com",
    messagingSenderId: "812841798271",
    appId: "1:812841798271:web:2082c404b1bfd55a95cd4a",
    measurementId: "G-5886XEDJGW"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider }
export default db;