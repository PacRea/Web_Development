//querySelector
const heading = document.querySelector(".header__texto h2");
heading.textContent = "Nuevo heading";
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces[0]);
enlaces[0].textContent = "Nuevo texto par enlace";
enlaces[0].classList.add("nueva-clase");
//enlaces[0].classList.remove("navegacion__enlace");

//Generar elementos HTML
const nuevoEnlace = document.createElement("A");
nuevoEnlace.href = "nuevo-enlace.html";
nuevoEnlace.textContent = "Tienda de sexo";
nuevoEnlace.classList.add("navegacion__enlace");

//Agregar al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);

//Eventos

console.log(1);

window.addEventListener("load", function () {
  console.log(2);
});

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){
    console.log(4);
});

console.log(5);
window.onscroll = function(){
    console.log("scrolling...")
}

//Eventos de click de elementos del HTML

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    evento.preventDefault();
    console.log("Enviando datos");
}); 


//Eventos de los Inputs y Textarea

const datos = {
    nombre : '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e){
    console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    console.log(datos);
}
//