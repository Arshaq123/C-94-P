// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2Qc8NEu_MfEH6xt7wva5oYiZDwRvsUFo",
    authDomain: "project-94-d5d31.firebaseapp.com",
    databaseURL: "https://project-94-d5d31-default-rtdb.firebaseio.com",
    projectId: "project-94-d5d31",
    storageBucket: "project-94-d5d31.appspot.com",
    messagingSenderId: "609587560033",
    appId: "1:609587560033:web:fdf1e3a2dab6fa84307420"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();