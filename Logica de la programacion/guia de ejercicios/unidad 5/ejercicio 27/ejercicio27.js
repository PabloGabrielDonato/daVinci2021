"use strict"

let sexo, edad, altura;
let cantidadHombres = 0, cantidadMujeres = 0;
let cantidadMujeresMayores = 0, cantidadHombresMenores = 0;
let acumEdadMujeres = 0, acumAlturaHombres = 0;
let edadMinima = 0, alturaMayor = 0;

do {
    do {
       sexo = prompt('Ingrese el sexo (H: Hombre, M: Mujer)').toLowerCase();
    } while (sexo!='h' && sexo!='m')

    do {
       edad = parseInt(prompt('Ingrese la edad (en años)'));
    } while (isNaN(edad))

	if(edadMinima==0)
	{
		edadMinima = edad
	}

    do {
       altura = parseInt(prompt('Ingrese la altura (en centimetros)'));
    } while (isNaN(altura))

	if(alturaMayor==0)
	{
		alturaMayor = altura
	}



    if (sexo=='h')
    {
       cantidadHombres++;
       acumAlturaHombres += altura;
       if (edad<18) {
          cantidadHombresMenores++;
       }
    }
    else
    {
       cantidadMujeres++;
       acumEdadMujeres += edad;
       if (edad>25) {
          cantidadMujeresMayores++; 
       } 
    }
} while (confirm('¿Desea seguir ingresando personas?'))


console.log('Cantidad de Mujeres: '+ cantidadMujeres);
console.log('Cantidad de Hombres: '+ cantidadHombres);
console.log('Cantidad de Mujeres +25: '+ cantidadMujeresMayores);
console.log('Cantidad de Hombres +18: '+ cantidadHombresMenores);

console.log('a. El porcentaje de mujeres mayores a 25 años:'+( cantidadMujeresMayores * 100 / cantidadMujeres ));
console.log('b. El porcentaje de hombres menores de 18 años:'+( cantidadHombresMenores * 100 / cantidadHombres ));
console.log('c. El promedio de edad de las mujeres:'+(acumEdadMujeres/cantidadMujeres));
console.log('d. El promedio de altura de los hombres:'+(acumAlturaHombres/cantidadHombres));
console.log('e. La menor edad ingresada es' + edadMinima);
console.log('f. La mayor altura ingresada es' + alturaMayor);