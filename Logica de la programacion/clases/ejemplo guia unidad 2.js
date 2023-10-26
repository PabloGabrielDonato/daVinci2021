let lado1 = 0;
let lado2 = 0;
let lado3 = 0;
let perimetro = 0;


//El usuario ingresa los 3 lados
lado1 = parseInt(prompt("Ingrese el lado 1"));
lado2 = parseInt(prompt("Ingrese el lado 2"));
lado3 = parseInt(prompt("Ingrese el lado 3"));


//Calcular el perimetro
perimetro = lado1+lado2+lado3;


//Informar el perimetro
alert("El resultado es: " + perimetro);