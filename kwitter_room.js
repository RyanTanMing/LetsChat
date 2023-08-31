
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCmV4HZ_0wELw6giOaldpwxgt66qnElcEw",
      authDomain: "letschat-f2097.firebaseapp.com",
      databaseURL: "https://letschat-f2097-default-rtdb.firebaseio.com",
      projectId: "letschat-f2097",
      storageBucket: "letschat-f2097.appspot.com",
      messagingSenderId: "1024353378123",
      appId: "1:1024353378123:web:f30d06d591139d35ec92ce"
    };
// Initialize Firebase
document.getElementById("Welcome").innerHTML = "Welcome " + localStorage.getItem("username")
firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log('room names' + Room_names)
                  row = "<div class='room_name' id=" + Room_names + "onclick=redirecttoroomname(this.id)>" + Room_names + "</div><hr>"
                  console.log(row)
                  document.getElementById("output").innerHTML += row
                  //End code
            });
      });
}
getData();
function addroom() {
      room_name = document.getElementById('room_name').value
      firebase.database().ref("/").child(room_name).update({ test: "Adding room name" })
      localStorage.setItem('room_name', room_name)
      window.location = "kwitter_page.html"
}
function redirecttoroomname(name) {
      console.log(name)
      localStorage.setItem('room_name', room_name)
      window.location = "kwitter_page.html"
}
function logout() {
      localStorage.removeItem('room_name')
      localStorage.removeItem('username')
      window.location='index.html'
}
