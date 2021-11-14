import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
  apiKey: "AIzaSyA5-pBFoGBo0KGrU8P_cq9vuHk0RFMbmF0",
  authDomain: "mednet-89aaf.firebaseapp.com",
  projectId: "mednet-89aaf",
  storageBucket: "mednet-89aaf.appspot.com",
  messagingSenderId: "264453218812",
  appId: "1:264453218812:web:2aca0934592cd06d679279",
  measurementId: "G-R35YQY6KZ7"
}).auth();
