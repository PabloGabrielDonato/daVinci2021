"use strict" 
let valorHora = 0;
let	cantidadHoras = 0;
let	aniosAntiguedad = 0;
let cantidadSegurosVendidos = 0;
let valorSeguroMasCaroVendido = 0;


let sueldoNeto = 0;
let bonoSeguroMasCaro = 0;
let bonoCantidadSegurosVendidos = 0;
let bonoAntiguedad = 0;
let sueldoMensual = 0;
let promedioHora = 0;

//ingresar variables

valorHora = parseInt(prompt("Ingresar valor de la hora"))
cantidadHoras = parseInt(prompt("Ingresar cantidad de horas trabajadas en el mes"))
aniosAntiguedad = parseInt(prompt("Ingresar la cantidad de años de antiguedad"))
cantidadSegurosVendidos = parseInt(prompt("Ingresar cantidad de seguros vendidos"))
valorSeguroMasCaroVendido = parseInt(prompt("Ingresar el valor del seguro más caro vendido"))

//calcular sueldo
sueldoNeto = cantidadHoras * valorHora;

bonoSeguroMasCaro = (valorSeguroMasCaroVendido*50) / 100;

bonoCantidadSegurosVendidos = ((sueldoNeto * 25) / 100) * cantidadSegurosVendidos;

bonoAntiguedad = ((sueldoNeto * 15) / 100) * aniosAntiguedad;

sueldoMensual = sueldoNeto + bonoSeguroMasCaro + bonoCantidadSegurosVendidos + bonoAntiguedad;

promedioHora = sueldoMensual / cantidadHoras;

//informar sueldo
alert( "Su sueldo es de: " + sueldoMensual);
alert("El valor promedio de la hora es: " + promedioHora);