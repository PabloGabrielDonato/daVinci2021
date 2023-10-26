"use strict"

let categoria = parseInt(prompt("Ingrese el número correspondiente a su categoría"));
let extras    = parseInt(prompt("Ingrese el número correspondiente a sus horas extras"));
let categoria1 = 2000;
let categoria2 = 3000;
let categoria3 = 4000;
let bono1      = 500;
let bono3      = 1000;
let sueldo     = 0;
let respuesta  = 0;

switch (categoria) {
    case 1:
        sueldo = categoria1;
        if (extras>20)
        {
            sueldo += bono1;
        }
    break;
    case 2:
        sueldo = categoria2;
    break;
    case 3:
        sueldo = categoria3;
        if (extras>30)
        {
            sueldo += bono3;
        }
    break;
    default:
        sueldo = 0;
}

if (sueldo>4000)
{
    respuesta = "Su saldo es de: USD "+ sueldo +" . Su sueldo supera los USD 4000.";
}
else
if (sueldo ==0)
{
    respuesta = "No ingresó una categoría existente";
}
{
    respuesta = "Su saldo es de: USD "+ sueldo +" . Su sueldo no supera los USD 4000.";
}

alert(respuesta);
document.write(`<p><strong>${respuesta}</strong></p>`);
console.info(respuesta);