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
   firebase.initializeApp(firebaseConfig);
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function adduser() {
    user=document.getElementById("email").value 
    localStorage.setItem("user",user)
    window.location="second.html"
}