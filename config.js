import firebase from 'firebase';
require('@firebase/firestore')

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDIoNHFl_PPeWLbV92xFJYSEDPoFNP2kgA",
  authDomain: "bedtimestories-11b65.firebaseapp.com",
  databaseURL: "https://bedtimestories-11b65.firebaseio.com",
  projectId: "bedtimestories-11b65",
  storageBucket: "bedtimestories-11b65.appspot.com",
  messagingSenderId: "415385643283",
  appId: "1:415385643283:web:e070aaaba6c2777dae52e6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
 
