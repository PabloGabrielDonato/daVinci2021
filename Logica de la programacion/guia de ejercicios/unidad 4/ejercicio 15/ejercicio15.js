'use strict'



let numero = 0
numero = parseInt(prompt('Ingrese un valor numérico'))

if (numero == 0)
{
	alert("El número es cero");
}
else
{
	if (numero % 2 == 0)
	{
		alert("El número es par")
	}
	else
	{
		alert("El número es impar")
	}	
}