

const API_URL = "http://localhost:8090/notepad-api/notes";
var request = new XMLHttpRequest();
//fetch petition
const HTMLResponse = document.querySelector(".notes--container");
const div = document.createElement('div');
div.className = "notes--container-dashboard";
div.className = "notes--all-container";
const lista = document.querySelector("lista-lista");
var window = document.getElementById("window-form")
window.style.display ="none";
const agregar = document.getElementById("agregar");
const close_button = document.getElementById('close-button');

fetch(API_URL+"/all")
 .then((response) => response.json())
 .then((all) => {
    all.forEach((alls)=>{

        let elem = document.createElement('h2');
        let paraph= document.createElement('p');
        elem.appendChild(
          document.createTextNode(alls.title),
         
        );
          paraph.appendChild(
            document.createTextNode(alls.note)
          )

        div.appendChild(elem);
        div.appendChild(paraph);

    });

    HTMLResponse.appendChild(div);
 });

agregar.addEventListener("click", function(){
   if(window.style.display == "none"){
     window.style.display = "block";

   }else{
      window.style.display = "none";
   }
});


const guardar = document.getElementById("guardar");
const limpiar = document.getElementById("limpiar");
guardar.addEventListener("click", function(){ 
     //  const title = new FormData(document.getElementById('formulario'));
      const title = document.getElementById('title').value;
      const note = document.getElementById('note').value;
      const fecha = new Date();
      if(title == "" || note == ""){
        alert("No puede dejar campos vacios");
      }else{
      var data = { title: title,
      note: note,
      datenote: fecha
         }

         console.log(data);

  fetch(API_URL+"/save", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    }
}).then(res => res.json())
.catch(error => console.error('Error:', error)) 
.then(response => console.log('Success:', response));
     if(request.status == 200){
        alert("suck my dick");
     }
    }
});


limpiar.addEventListener("click", function(){
       title.value = "";  
       note.value = "";

});


/*
close_button.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("window-notice").style.display = "none";
});

*/


