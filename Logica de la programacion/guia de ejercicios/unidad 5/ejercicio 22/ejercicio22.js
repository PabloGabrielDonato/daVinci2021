
let numero;
let respuesta;

for (let i=0;i<3;i++){
	numero= parseInt(prompt('Ingrese un valor'));

	if(numero%3!=0 && numero%5!=0)
	{
	    respuesta = 'El numero ${numero} es de ninguno';
	}
	if (numero%3===0)
    {
	    respuesta = 'El numero ${numero} es multiplo de 3';
	}
	if (numero%5===0)
	{	
	    respuesta = 'El numero ${numero} es multiplo de 5';
	}
	if (numero%3===0 && numero%5===0)
	{
 	    respuesta = 'El numero ${numero} es multiplo de ambos';
	}
	console.log(respuesta);
}