
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyDn6JO8Q-LQOxGIjJWYiB6aYkAnITjRxz0",
    authDomain: "kwitter-2ca9d.firebaseapp.com",
    databaseURL: "https://kwitter-2ca9d-default-rtdb.firebaseio.com",
    projectId: "kwitter-2ca9d",
    storageBucket: "kwitter-2ca9d.appspot.com",
    messagingSenderId: "304717066587",
    appId: "1:304717066587:web:90af90daa74b650eb4aa7e",
    measurementId: "G-VWNEFF06DH"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function add_user() {
user_name=document.getElementById("user_name").value;
firebase.database().ref('/').child(user_name).update({
    purpose : "Adding user"
});
}