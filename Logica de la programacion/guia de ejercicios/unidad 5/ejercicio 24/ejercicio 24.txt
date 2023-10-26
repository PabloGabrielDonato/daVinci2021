let numero1;
let numero2;
let operador;
let respuesta = 0;
do{
    num1     = parseInt(prompt("ingrese el primer numero"));
    num2     = parseInt(prompt("ingrese el segundo numero"));
    operador = prompt("ingrese un operador (+, -, /, *)");
        
        if(!isNaN(numero1) && !isNaN(numero2)){
            switch(operador){
                case "+":
                    respuesta = numero1 + numero2;
                    document.write("<p>" + respuesta + "</p>");
                break;   
                case "-":
            
                    respuesta = document.write(numero1 - numero2);
                break;   
                case "/":
                    respuesta = document.write(numero1 / numero2);
                break;
                case "*":
                    respuesta = document.write(numero1 * numero2);
                break;
                default:
                    respuesta = document.write("<p>El operador ingresado es incorrecto, intente con (+, -, /, *)</p>");
            }    
        }else{
            document.write("<p>Vuelva a intentar utilizando un numero</p>")
        }
}while(confirm("quiere seguir ingresando numeros?"));