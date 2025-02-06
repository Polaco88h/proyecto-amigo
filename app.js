// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// recibimos el nombre y lo metemos en un array 
//let frutas = ["Manzana", "Banana"];
 

let amigos = [];
let nom ;
let campo;
function agregarAmigo(){
 campo = document.getElementById("amigo");
 nom = campo.value;
if(nom == "")
    {
    alert("Por favor, inserte un nombre.");
    }
else
{
    // funcion actualizarListamigos
    amigos.push(nom);
    
    

    /* let lista = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = nom;

    lista.appendChild(li); */

    //campo.value = "";
    //console.log(amigos);
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    


for (let i= 0; i < amigos.length; i++) {
    
    let li = document.createElement("li");
    li.textContent = nom;
    
    lista.appendChild(li);

    
    //campo.value = "";
    //campo.innerHTML = "";
    
}
}
}
campo.value = "";
