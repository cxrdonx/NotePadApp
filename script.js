
console.log("RUNNING");

const API_URL = "http://localhost:8090/notepad-api/notes";
//fetch petition
const HTMLResponse = document.querySelector(".app");
const ul = document.createElement('ul');

fetch(API_URL+'/all')
.then((response) => response.json())
.then((all) => {
  all.forEach((all) => {
       let element = document.createElement("li");
       element.appendChild(
           document.createTextNode('all.title')
       );
       ul.appendChild(element);


});

   HTMLResponse.appendChild = (ul);
});

//nasa api
    





/*
//create ajax request
const xhr = new XMLHttpRequest();
//xhttp.onready
function onRequestHandler(){
  if (this.readyState === 4 && this.status === 200) {
     const data = JSON.parse(this.response);
    console.log(data);
  }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", API_URL+'/all');
xhr.send();

//fetch api
fetch(API_URL+'/all')
.then(response => response.json())
.then(json => console.log(json));

*/
