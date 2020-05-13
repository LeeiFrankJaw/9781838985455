import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDuhtnkGLxnNXxvXUZ3-Aq_0JfnRc5M0IA",
  authDomain: "creative-cards-app-1d1f0.firebaseapp.com",
  databaseURL: "https://creative-cards-app-1d1f0.firebaseio.com",
  projectId: "creative-cards-app-1d1f0",
  storageBucket: "creative-cards-app-1d1f0.appspot.com",
  messagingSenderId: "648944713558",
  appId: "1:648944713558:web:981ac5a52da6819bd3e0f7",
  measurementId: "G-2QLYETGHXN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
