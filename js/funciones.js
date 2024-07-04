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

//-----------------Cadenas de texto-----------------

let cadena = "Hola,mundo";
console.log(cadena.length); //Longitud de la cadena
console.log(cadena.charAt(6)); //Caracter en la posicion 6
console.log(cadena.charAt(cadena.length-1)); //Ultimo caracter de una cadena de la que no conoces el tamaño
console.log(cadena.indexOf("un")); //Posicion de la primera ocurrencia de la cadena
//Si no encuentra la cadena devuelve -1
console.log(cadena.lastIndexOf("o")); //Posicion de la ultima ocurrencia de la cadena
//Si no encuentra la cadena devuelve -1
console.log(cadena.replace("mundo","amigos")); //Reemplaza la primera ocurrencia de la cadena
console.log(cadena.search("mundo")); //Busca la cadena y devuelve la posicion
console.log(cadena.split(",")); //Divide la cadena en un array
console.log(cadena.substring(0,4)); //Extrae los caracteres desde la posicion 0 hasta la 4
console.log(cadena.toLowerCase(cadena)); //Convierte la cadena a minusculas
console.log(cadena.toUpperCase(cadena)); //Convierte la cadena a mayusculas
console.log(cadena.concat(" ","Luisa"," ","Fernanda")); //Concatena cadenas

cadena = cadena + " Luisa" + " Fernanda";
console.log(cadena); 

numero1 = numero1.toString(); //Convierte un numero a cadena
console.log(numero1);

console.log(numero1 + " Meses minimos"); //Concatenacion de cadena con numero
