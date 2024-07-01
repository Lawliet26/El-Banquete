/* Para comentar varias lineas */
// Para comentar una sola linea

//DECLARACION DE VARIABLES
let numero1;
numero1 = 12;

let numero2 = 15;
console.log(numero2);
console.log(typeof numero2);

let numero3 = "45";
console.log(numero3);
console.log(typeof numero3);
numero3 = parseInt(numero3);
console.log(numero3);

let palabra = "Hola mundo";
console.log(palabra);
console.log(typeof palabra);

let logica = true;
console.log(logica);
console.log(typeof logica);

let flot = 12.4;
console.log(flot);
console.log(typeof flot);

let lista = ["Luisa",numero3, logica, flot];
console.log(lista);
console.log(typeof lista);
console.log(lista[0]);

console.log("Mi novia se llama "+ lista[0]);

let objeto = {
    nombre: "Luisa",
    edad: 19,
    soltera: false
}

console.log(objeto);