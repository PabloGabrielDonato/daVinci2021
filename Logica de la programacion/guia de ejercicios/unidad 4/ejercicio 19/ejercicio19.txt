'use strict';


let numero1    = parseInt(prompt('Ingrese un numero'));
let numero2    = parseInt(prompt('Ingrese otro numero'));
let operador   = prompt("Ingrese un operador (+,-,*,/)");
let respuesta  = "";


switch(operador) {
    case "+":
    respuesta = numero1 + numero2;
    break;
    case "-":
    respuesta = numero1 - numero2;
    break;
    case "*":
    respuesta = numero1 * numero2;
    break;
    case "/":
    respuesta = numero1 / numero2;
    break;
    default:
    respuesta = 'El operador ingresado no es válido.';
}
document.write(`El resultado es:  ${respuesta} La operacion realizada fue una:  ${operador} entre los valores: ${numero1} y ${numero2}`);