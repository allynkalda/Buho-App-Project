import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyD6bZJi5URKgapRjRErxGY7I3nqcsUNk0k",
    authDomain: "buhos-app-project.firebaseapp.com",
    databaseURL: "https://buhos-app-project.firebaseio.com",
    projectId: "buhos-app-project",
    storageBucket: "buhos-app-project.appspot.com",
    messagingSenderId: "805612353548",
    appId: "1:805612353548:web:09d4d9ac98cfee4e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase