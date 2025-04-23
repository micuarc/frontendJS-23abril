document.writeln("<h1>Hola Javascript</h1>");

let nombre = "equisde";

let datos = ["hola", "chao", "hi", "bye"];

let gatoCagon = {
    nombre: "cagon",
    especie: "gato",
    juguetes: ["raton", "rascador", "pelota", "lapiz"],
    edad: 3
}


let gatoLonquimay = {
    nombre: "lonquimay",
    especie: "gato",
    juguetes: ["raton", "rascador", "pelota", "lapiz"],
    edad: 3
}

console.log(datos);
console.log(gatoCagon);
let uno = 1;
let uno_string = 1;

// control structures
if (uno===uno_string) 
{
    console.log("Son iguales! aunque solo en valor numérico");
} else     console.log("No son iguales en tipo de dato :(");

let datosAlumnos = "diurno";

switch(datosAlumnos) {
    case "diurno" :
        console.log("Alumno de día");
        break;
    case "vespertino" :
        console.log("Alumno de noche");
        break;
    default :
         console.log("No es alumno");
         break;
}

//mostrar los primeros 10 números positivos
let cont = 1;
while (cont <= 10) {
    console.log(cont);
    cont++;
}

for (let i=0; i<datos.length; i++){
    console.log(datos[i]);
}

function mensaje(){
    console.log("Hola, " + gatoCagon.nombre);
}

mensaje();

let contadorPares1=0;
let contadorPares2=0;
let contadorPares3=0;

let numeros = [45,33,22,14,8,24,3,12,1,44]
let numeros3 = [2, 4, 6]

function cantidadPares(arreglo){
    let contadorPares = 0;
    for(i=0; i<arreglo.length; i++){
        if (arreglo[i] % 2 === 0){
            console.log("Numero par: " + arreglo[i]);
            contadorPares++
        }
    }
    return console.log("Cantidad de numeros pares: " + contadorPares);;
}

cantidadPares(numeros);
cantidadPares(numeros3);



function mensajeAGato (gato){
    console.log("Hola, " + gato.nombre);
}

mensajeAGato(gatoCagon);
mensajeAGato(gatoLonquimay);
