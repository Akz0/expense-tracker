import firebase from 'firebase/app'
import "firebase/auth"


// const FIREBASE_API_KEY = "AIzaSyC-W_eAfmy9vIdXOB-BHK3i-Y1ZqFncpNo"
// const AUTH_DOMAIN = "expense-tracker-development-1.firebaseapp.com"
// const PROJECT_ID = "expense-tracker-development-1"
// const STORAGE_BUCKET = "expense-tracker-development-1.appspot.com"
// const MESSAGING_SENDER_ID = "249335298553"
// const APP_ID = "1:249335298553:web:320881ea3a51506b926528"

const firebaseConfig = {
    apiKey: "AIzaSyC-W_eAfmy9vIdXOB-BHK3i-Y1ZqFncpNo",
    authDomain: "expense-tracker-development-1.firebaseapp.com",
    projectId: "expense-tracker-development-1",
    storageBucket: "expense-tracker-development-1.appspot.com",
    messagingSenderId: "249335298553",
    appId: "1:249335298553:web:320881ea3a51506b926528"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth=firebaseApp.auth()
export default firebaseApp
