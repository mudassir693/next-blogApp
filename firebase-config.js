// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// import { getAnalytics,isSupported  } from "firebase/analytics";
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrwx5I-lBjoG9KafozBVcUBngGmK5ibkk",
  authDomain: "progress-regularly.firebaseapp.com",
  projectId: "progress-regularly",
  storageBucket: "progress-regularly.appspot.com",
  messagingSenderId: "254475633750",
  appId: "1:254475633750:web:137c2dee29510a22f9e7f7",
  measurementId: "G-SYXP8TN958"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}
// nitialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

// export const storage = firebase.storage()


export default firebase;