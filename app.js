// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// recibimos el nombre y lo metemos en un array 
let amigos = [];  //Declaro el array

function agregarAmigo() {
    let campo = document.getElementById("amigo");  // Selecciono el campo del cual quiero obtener el contenido
    let amigo = campo.value.trim();               // Obtengo y limpio el valor 

    if (amigo == "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(amigo);                        // Envio el amigo al Array

    campo.value = "";                         // Vacio el campo 

    actualizarListaAmigos();

}
campo.focus();

function actualizarListaAmigos() {                             // Actualizo la lista

    let lista = document.getElementById("listaAmigos");       // selecionamos la lista donde vamos a poner a los amigos
    lista.innerHTML = "";                                     // la vaciamos antes de poner nuevos amigos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");               // por cada  amigo creamos un contenido
        li.textContent = amigos[i];                          // el amigo va a el contenido
        lista.appendChild(li);                                // el contenido se agrega a la lista

    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la Lista ");
        return;
    }
    else {
        let aleatorio = Math.floor(Math.random() * amigos.length);
        let posicion = amigos[aleatorio];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        resultado.innerText = posicion;

    }
}






