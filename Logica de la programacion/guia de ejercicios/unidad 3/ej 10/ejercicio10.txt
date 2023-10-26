"use strict"
let diametro = 0;
let radio = 0;
let PI = 3.1416;
let area = 0;
let perimetro = 0;

//El usuario ingresa el diametro

diametro = parseInt(prompt("Ingrese medida de diámetro"))

perimetro = PI*diametro;

radio = diametro/2;

area = PI*radio**2

alert("El perímetro es: " + perimetro);
alert("El área es: " + area)