var firebaseConfig = {
      apiKey: "AIzaSyAgV8CEkg-CwkaAqgoD57MOJcp9Q7Y2Kz0",
      authDomain: "kwitter-app-1750a.firebaseapp.com",
      databaseURL: "https://kwitter-app-1750a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-1750a",
      storageBucket: "kwitter-app-1750a.appspot.com",
      messagingSenderId: "1077823025099",
      appId: "1:1077823025099:web:bdd77ff5cc29ecacbfd04e"
    };
    
    // Initialize Firebase
    firebase.initializeApp (firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
