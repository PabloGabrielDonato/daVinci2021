"use strict"

let valorHora = 0;
let	cantidadHoras = 0;
let sueldoMensual = 0;
let aniosAntiguedad = 0;
let sueldoNeto = 0;
let bonoAntiguedad = 0;


valorHora = parseInt(prompt("Ingresar valor de la hora"))
cantidadHoras = parseInt(prompt("Ingresar cantidad de horas trabajadas en el mes"))
aniosAntiguedad = parseInt(prompt("Ingresar la cantidad de años de antiguedad"))


sueldoNeto = cantidadHoras * valorHora;
bonoAntiguedad = ((sueldoNeto * 15) / 100) * aniosAntiguedad;
sueldoMensual = sueldoNeto + bonoAntiguedad;




alert( "Su sueldo es de: " + sueldoMensual);