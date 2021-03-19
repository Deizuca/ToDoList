"use strict";
 
// create a To Do list - create new list
document.addEventListener("DOMContentLoaded",documentReady)
                          
function documentReady() {

var createList = document.getElementById('add_btn');
createList.onclick = function(){
  var showList = document.getElementById('showList');
  var createList = document.getElementById('list');
  createList.onclick = nameList;
  showList.style.display = "block";
  console.log("test");
}

// stop form from refreshing
function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm); 
  account.addEventListener('submit', handleForm);

  function nameList(){
  //get values from the inputs, trim is used to remove whitespace from the value
  var newElement = document.createElement("BUTTON");
  var listNameValue = todo.value;
  if(listNameValue === ''){
    alert("Please give your new list a name");
  }else {
    //success
    localStorage.setItem('todo', todo.value);
    console.log(localStorage);
    newElement.innerHTML = todo.value;
    document.body.appendChild(newElement);
   
    newElement.onclick = function () {
      location.href = "todolist.html";  
    }

  }
   
   
    
  }

};