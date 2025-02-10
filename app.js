// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// recibimos el nombre y lo metemos en un array 
//let frutas = ["Manzana", "Banana"];
 

let amigos = [];                 //Declaro el array

function agregarAmigo(){                      // Cuando hago click llamo a esta funcion     
 let campo = document.getElementById("amigo");  // Selecciono el campo del cual quiero obtener el contenido
 let amigo = campo.value.trim();                      // Obtengo y limpio el valor 
 
if(amigo === "")
    {
    alert("Por favor, inserte un nombre.");
    }
else
{
    amigos.push(amigo);                        // Envio el amigo al Array
    
    campo.value = "";                         // Vacio el campo 
    

    actualizarListaAmigos();
    //console.log(amigos);
    
}
}
function actualizarListaAmigos(){                             // Actualizo la lista

    let lista = document.getElementById("listaAmigos");       // selecionamos la lista donde vamos a poner a los amigos
    lista.innerHTML = "";                                     // la vaciamos antes de poner nuevos amigos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");               // por cada  amigo creamos un contenido
        li.textContent = amigos[i];                          // el amigo va a el contenido
        lista.appendChild(li);                                // el contenido se agrega a la lista
        
    }
    /*amigos.forEach(amigo => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
    });*/
}
