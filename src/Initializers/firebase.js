import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyD2kJmyE9IuE_wumYVW53R-i78RIYxnMYY",
  authDomain: "fibare-27779.firebaseapp.com",
  projectId: "fibare-27779",
  storageBucket: "fibare-27779.appspot.com",
  messagingSenderId: "403727482050",
  appId: "1:403727482050:web:b87bbe329b877517a30f5b",
  measurementId: "G-S24RTX6YTD",
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export const db = firebase.firestore();
export default firebase;
