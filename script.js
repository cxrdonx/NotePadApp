
console.log("RUNNING");

const API_URL = "http://localhost:8090/notepad-api/notes";
//fetch petition
const HTMLResponse = document.querySelector(".container");
const div = document.createElement('div');
const lista = document.querySelector("lista-lista");

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

  //    let body = document.createElement('li');
    //     body.appendChild(
    //      document.createTextNode(alls.note),
   //      );

        div.appendChild(elem);
        div.appendChild(paraph);

    });

    HTMLResponse.appendChild(div);
 });




