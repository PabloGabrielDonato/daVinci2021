let nota ;
let cantAlumnos      = 0; //contador
let cantAprobados    = 0; //contador
let cantDesaprobados = 0; //contador
let sumaNotas        = 0; //acumulador


do {

    do{
        nota = parseFloat(prompt('Ingrese una nota entre 1 y 10'));
    }while(!(nota<=10 && nota >=1))
   
    console.log(`Nota ingresada: ${ nota }`);

    if(nota>=4){
        cantAprobados ++;
    }else {
        cantDesaprobados++;
    } 
    sumaNotas += nota;
    cantAlumnos++
}
while (confirm('¿Desea seguir ingresando notas?'))

console.log(`Cantidad de alumnos: ${cantAlumnos}`);
console.log(`Cantidad de alumnos aprobados:${cantAprobados}`);
console.log(`Cantidad de alumnos desaprobados:${cantDesaprobados}`);

console.log(`% de alumnos aprobados: ${cantAprobados * 100 / cantAlumnos} `);
console.log(`% de alumnos desaprobados: ${cantDesaprobados * 100 / cantAlumnos}`);

console.log(`Promedio de notas:${sumaNotas / cantAlumnos} `);