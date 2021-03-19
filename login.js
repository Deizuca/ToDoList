"use strict"


//Register user
document.addEventListener("DOMContentLoaded", ()=>{
  
var registerUser = document.getElementById('register');
  registerUser.onclick = checkInputs;
var credentials = document.getElementById('login');
 credentials.onclick = checkCredentials;
var form = document.getElementById('form');
var account = document.getElementById('account');
var username = document.getElementById('registerusername');
var password = document.getElementById('registerpassword');
  
  // stop form from refreshing
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm); 
  account.addEventListener('submit', handleForm);
  
  // storing input from register-form
 

function checkInputs(){
  //get values from the inputs
  var usernameValue = username.value;
  var passwordValue = password.value; 
  
  if(usernameValue === ''){
    alert("Please enter a username");
  }else if (passwordValue === '') {
    alert("Please choose a password");
  }else {
    //success
    alert("successfully registered, please log in");
      localStorage.setItem('username', username.value);
      localStorage.setItem('password', password.value);
    console.log(localStorage);
   
}
}
  //checking if credentials are right
  function checkCredentials(){
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('password');

    var userName = document.getElementById('loginusername');
    var userPw = document.getElementById('loginpassword');

    if(userName.value == storedName && userPw.value == storedPw){
      location.href="todo.html";
    }else{
      alert('Error on login');
    }
  }

});