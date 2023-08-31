//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCmV4HZ_0wELw6giOaldpwxgt66qnElcEw",
      authDomain: "letschat-f2097.firebaseapp.com",
      databaseURL: "https://letschat-f2097-default-rtdb.firebaseio.com",
      projectId: "letschat-f2097",
      storageBucket: "letschat-f2097.appspot.com",
      messagingSenderId: "1024353378123",
      appId: "1:1024353378123:web:f30d06d591139d35ec92ce"
    };
firebase.initializeApp(firebaseConfig);
room_name=localStorage.getItem('room_name')
user_name=localStorage.getItem('username')
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(message_data)

//End code
      } });  }); }
getData();
function send() {
      n=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,message:n,like:0
      })
      document.getElementById("msg").value=""
}
function logout() {
      localStorage.removeItem('room_name')
      localStorage.removeItem('username')
      window.location='index.html'
}