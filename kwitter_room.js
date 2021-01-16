var firebaseConfig = {
      apiKey: "AIzaSyBydE1z4Goi4NuLgFKpT_1wfw2-PskJGs4",
      authDomain: "kwitter-bacae.firebaseapp.com",
      databaseURL: "https://kwitter-bacae-default-rtdb.firebaseio.com",
      projectId: "kwitter-bacae",
      storageBucket: "kwitter-bacae.appspot.com",
      messagingSenderId: "462710440200",
      appId: "1:462710440200:web:f5b0c8f105e2bc095aacbd",
      measurementId: "G-3NSM14NJ6T"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("UsernameKey");
document.getElementById("username").innerHTML="Welcome "+username+" !";




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
