"use strict"

let extremo1 =     parseInt(prompt("Ingresar el valor del extremo inferior"));
let extremo2 =     parseInt(prompt("Ingresar el valor del extremo superior(recuerde que la diferencia minima con el extremo inferior debe ser de 5 numeros enteros)"));
let rango = (extremo2 - extremo1);
let respuesta = '';



if (extremo2 > extremo1)
{
    if (rango <5)
    {
        respuesta= ("El rango ingresado no es válido ya que no tiene una diferencia de 5 numeros enteros");
    }
    else
    {
        num = parseInt(prompt('Ingrese valor numérico a evaluar'));
        if (num >=extremo1 && num<=extremo2)
        {
            respuesta = 'El número ingresado está dentro del rango';
            if(num % 2 == 0)
            {
                respuesta += ' y es par';
            }
        }
        else
        {
            respuesta = 'El número ingresado NO está dentro del rango';
            if (num % 2 !=0)
            {
                respuesta += ' y es impar'
            }
        }
    }

}
else
{
    respuesta = 'El extremo superior debe ser mayor al inferior';
}
alert(respuesta);
document.write('<p><strong>${respuesta}</strong></p>');
console.info(respuesta);























// else{
//     if (num >= extremo1 && num <= extremo2)
//     {
//         respuesta = "El número ingresado esta dentro del rango";
        
//         if (num % 2 == 0)
//         {
//             respuesta = respuesta +' y es par';
//         }   
//     }   
// }


//     respuesta = "El número ingresado NO esta dentro del rango";
        
//      if (num % 2 != 0)
//     {
//      respuesta = respuesta +' y es par';
//     }
//     else
//     {
//      respuesta = respuesta + ' y es impar ';
//     }




// alert()