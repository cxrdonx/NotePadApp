

const API_URL = "http://localhost:8090/notepad-api/notes";
var request = new XMLHttpRequest();
const HTMLResponse = document.querySelector(".notes--container");
const div = document.createElement('div');

 //divnote.className = "notes--all-container";

const lista = document.querySelector("lista-lista");
var window = document.getElementById("window-form")
window.style.display ="none";
const agregar = document.getElementById("agregar");
const close_button = document.getElementById('close-button');
let divContainer = document.createElement('div');
const guardar = document.getElementById("guardar");
const limpiar = document.getElementById("limpiar");

                 //fetch API
fetch(API_URL+"/all")
 .then((response) => response.json())
 .then((all) => {
    all.forEach((alls)=>{

        let elem = document.createElement('div');
        let paraph= document.createElement('p');
        let title = document.createElement('h2');
        
    const elemento =  elem.appendChild(
          document.createTextNode(alls.title),

        );
        title.appendChild(
          document.createTextNode(elemento),
        )
      const elemento2 =  paraph.appendChild(
            document.createTextNode(alls.note),

      );
        note.appendChild(
           document.createTextNode(elemento2),
        )
    
        div.appendChild(elem),
         div.appendChild(paraph)
    

    });

    HTMLResponse.appendChild(div);
 });

 var title = document.getElementById('title')
 var note = document.getElementById('note')

guardar.addEventListener("click", function(){
  
 title = title.value;
 note = note.value;
 
  var date = new Date();

      var data ={
        title: title, 
        note: note,
        datenote: date
      }
      console.log(data);

    fetch(API_URL+"/save",{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(function(response){
      if(response.ok){
         alert("ENVIADO");
         clear();
         location.reload();
        return response.text();
      }else{
       alert("Error, intente de nuevo");
        throw "Error";
      }
    })
    .then(function(texto) {
      console.log(texto);
    })
    .catch(function(err){
      console.log(err);
    })
      
});


limpiar.addEventListener("click", function(){
  clear();

});

function clear(){
  var title = document.getElementById('title')
  var note = document.getElementById('note')
     title.value="";
     note.value="";
  
}


agregar.addEventListener("click", function(){
if(window.style.display == "none"){
window.style.display = "block";

}else{
 window.style.display = "none";
}
});

























