/* Para comentar varias lineas */
// Para comentar una sola linea

//DECLARACION DE VARIABLES
let numero1;
numero1 = 12;

let numero2 = 4;
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

console.log(numero1.toString());//Convierte un numero a cadena

console.log(numero1 + " Meses minimos"); //Concatenacion de cadena con numero

// -------------------Operadores-------------------
let total = numero1 + numero2;
console.log(total);

total = numero1 - numero2;
console.log(total);

total = numero1 * numero2;
console.log(total);

total = numero1 / numero2;
console.log(total);

total = numero1 % numero2;
console.log(total);

console.log(Math.pow(2,3)); //Potencia
console.log(2**3); //Potencia

console.log(Math.sqrt(81)); //Raiz cuadrada


// -------------------Comparadores-------------------

console.log(numero1 != numero2); //Diferente

console.log(numero1 == numero2); //Igualdad

console.log(numero1 > numero2); //Mayor

console.log(numero1 >= numero2); //Mayor o igual

console.log(numero1 < numero2); //Menor

console.log(numero1 <= numero2); //Menor o igual

console.log(numero1); 
console.log(numero1 === "12" ); //Igualdad de valor y tipo
console.log(numero1 == "12");  //Igualdad de valor


// -------------------Funciones-------------------

function sumar(num1,num2){
    console.log(num1+num2); //La funcion imprime internamente el resultado
    let respuesta = num1+num2; //No se puede acceder a esta variable fuera de la funcion
}

sumar(7,8);

function restar(num1,num2){
    return num1-num2; //Devuelve un valor que tiene que ser almacenado en una variable
}

let resultadores = restar(12,7); //Almacena el valor devuelto por la funcion
console.log(resultadores);

//-------------------Funciones predefinidas-------------------

//alert("Hola mundo"); //Ventana emergente

//let salida = confirm("¿Desea salir de la pagina?"); //Ventana emergente con confirmacion
//alert(salida);

/*let nume1 = prompt("Ingrese numero 1");
let nume2 = prompt("Ingrese numero 2");

console.log(parceFloat(nume1)+parceFloat(nume2));*/

/*setTimeout(function(){
    alert("Bienvenido a El Banquete");
}, 1000); //Ejecuta una funcion despues de un tiempo */

/*setInterval(function(){
    console.log(new Date());
}, 1000); //Ejecuta una funcion cada cierto tiempo */

//-------------------Condicionales-------------------

/*
let edad = prompt("Ingrese su edad");

if((edad > 0) && (edad < 10)){
    alert("Eres menor de edad");
}else if(edad == 10){
    alert("Tienes 10 años");
}
else if((edad > 10) && (edad < 18)){
    alert("Sigues siendo menor de edad");
}else{
    alert("Eres mayor de edad");
}.
*/
/*
switch (parseInt(edad)){
    case 0:
        alert("Eres un bebe");
        break;
    case 10:
        alert("Eres menor de edad");
        break;
    case 18:
        alert("Eres mayor de edad");
        break;
    case 30:
        alert("Eres adulto");
        break;
    default:
        alert("Esa es una edad?");
}
*/

//-------------------Estructuras repetitivas-------------------

let semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

for (let i = 0; i < semana.length; i++){
    console.log(semana[i]);
}

for (let i = semana.length -1; i >=0 ; i--){
    console.log(semana[i]);
}

console.log(semana.length);

let nombre = "luisa";

for (let i = 0; i < nombre.length ; i++){
    console.log(nombre.charAt(i));
}

//-------------------Eventos-------------------

//Forma clasica de asignar eventos
/*

let cocinero1 = document.getElementById("cocinero1");

alert(cocinero1.innerHTML);

cocinero1.innerHTML = "Mateo Zapata"; //Cambia el contenido del elemento
cocinero1.id = "cocinero2"; //Cambia el id del elemento
cocinero1.className = "restaurante turnos"; //Cambia la clase del elemento

//Forma de selccionar por etiqueta

let titulos = document.getElementsByTagName("h2")

for (let i = 0; i < titulos.length; i++){
    titulos[i].id = "cocinero"+(i+1);
}



//Forma de seleccionar por clase

let columnas = document.getElementsByClassName("columna");

console.log(columnas);

for (let i = 0; i < columnas.length; i++){
    columnas[i].id = "columna"+(i);
}


//Forma de seleccionar por estructura de etiquetas

let enlaces = document.querySelectorAll("header nav a");

console.log(enlaces);

for (let i = 0; i < enlaces.length; i++){
    enlaces[i].id = "enlace"+(i);
}

// Forma de seleccionar solo el primer elemento que cumpla con la condicion
let enlace = document.querySelector("header nav a"); //Selecciona el primer elemento que cumpla con la condicion

enlace.className = "Enlace principal";

*/

//Forma de asignar eventos

let cocinero1 = document.getElementById("cocinero1");

/*
cocinero1.onclick = function(){
    alert("Soy el cocinero Mateo");
}

//Forma de asignar eventos con addEventListener
cocinero1.addEventListener("click",function(){
    alert("Soy el cocinero Andres");
});
*/