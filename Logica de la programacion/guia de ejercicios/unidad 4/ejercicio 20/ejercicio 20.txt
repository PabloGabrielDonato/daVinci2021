"use strict"

let lado1     = parseInt(prompt("Ingrese el primer lado"));
let lado2     = parseInt(prompt("Ingrese el segundo lado"));
let lado3     = parseInt(prompt("Ingrese el tercer lado"));

if(!isNaN(lado1) && !isNaN(lado2) && !isNaN(lado3)){
    if(lado1 == lado2 && lado1 == lado3){
           document.write = ("El triángulo es equilátero");
    }else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
           document.write = ("El triángulo es isósceles");
		}else{
			document.write = ("El triángulo es escaleno");
		}
	}