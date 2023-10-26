"use strict"

let letra      = prompt("Ingrese una letra").toLowerCase();
let respuesta   = "";

switch (letra) {

    case "a":
            respuesta = "Es la primera vocal";
    break;
    case "e":
            respuesta = "Es la segunda vocal";
    break;
    case "i":
            respuesta = "Es la tercera vocal";
    break;
    case "o":
            respuesta = "Es cuarta vocal";
    break;
    case "u":
            respuesta = "Es la quinta vocal";
    break;
    default: 
            respuesta = "La letra ingresada no es una vocal"
}

document.write(`<p><strong>${respuesta}</strong></p>`);