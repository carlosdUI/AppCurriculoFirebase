import firebase from "firebase"
import "firebase/storage"

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAOQ0pbXex4RuQIdnFJBJ472b3gSOGBGrg",
    authDomain: "task-eae72.firebaseapp.com",
    projectId: "task-eae72",
    storageBucket: "task-eae72.appspot.com",
    messagingSenderId: "370220330061",
    appId: "1:370220330061:web:977ad8cfe7a6e205f18004"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore()
  export default database