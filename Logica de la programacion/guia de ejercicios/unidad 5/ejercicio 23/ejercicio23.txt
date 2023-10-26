"use strict"

let extremo1 = 0;
let extremo2 = 0;
let rango = 0;
let numero;

do{
    extremo1 = parseInt(prompt('Ingrese el valor del primer extremo'));
    extremo2 = parseInt(prompt('Ingrese el valor del segundo extremo, tiene que tener, al menos, 5 numeros de diferencia con el extremo 1')); 
    rango = (extremo2 - extremo1);   
    numero = parseInt(prompt('Ingrese un numero'));  

    if (extremo2 > extremo1){
        
        if (rango >= 5) {
            
            if (numero %2 == 0){
                console.log('El número es par');
            }
        }
        else{
            if (numero %2 != 0){
             console.log('El número es impar');
        }
    }
}
 } while(numero >= extremo1 && numero <= extremo2 && rango >= 5);