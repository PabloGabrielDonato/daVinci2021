"use strict"

let numero;
let sumatoria = 0;
let menorValor;
let mayorValor;
let contador =0;


do{
    numero = parseFloat(prompt('Ingrese un valor numerico'))
    do{
        numero = parseFloat(prompt('Ingrese un valor numérico'));
    }while(isNaN(numero))
    console.log(numero);

    if(contador==0)
    {
        menorValor = numero;
        mayorValor = numero;
    }
    else
    {
         if(menorValor>numero)
         {
             menorValor = numero;
         }
        
     else
     {
         if(mayorValor>numero)
         {
            mayorValor = numero;
         }    

     }
    }


    contador++
    if(contador%2!=0) //contador es impar
    {
        sumatoria += numero;
    }

}while(confirm('¿Desea seguir ingresando valores?'))

console.log(`La sumatora de valores ingresadors en orden impar es: ${sumatoria} `);
console.log(`El menor valor ingresado es: ${menorValor}`);
console.log(`El mayor valor ingresado es: ${mayorValor}`);

