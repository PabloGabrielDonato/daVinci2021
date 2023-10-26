"use strict"

let valorHora = 0;
let	cantidadHoras = 0;
let sueldoMensual = 0;


valorHora = parseInt(prompt("Ingresar valor de la hora"))
cantidadHoras = parseInt(prompt("Ingresar cantidad de horas trabajadas en el mes"))

sueldoMensual = cantidadHoras * valorHora;

alert( "Su sueldo es de: " + sueldoMensual);