import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: "AIzaSyCFvtEFHkFsNaLLa_2RpT5tYV2m-l-x3rE",
  authDomain: "test-a709f.firebaseapp.com",
  projectId: "test-a709f",
  storageBucket: "test-a709f.appspot.com",
  messagingSenderId: "310738914788",
  appId: "1:310738914788:web:fa9481fd9f93e4d12b0bf1"
};


firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
