// variables - tipos de variables

var ejemplo; // no se usa problema de contextos y scopes - alcance
let ejemplo1;
const ejemplo3 = "Ejemplo";

// variables - tipos de dato
const edad = 21; // tipo number
const nombre = "Marcos"; // tipo string
const apellido = "Mercado"; // tipo string
let clases = ["clase0", "clase1", "clase2", "clase3"]; // tipo arreglo - array
let persona = {
  nombre: "Marcos",
  apellido: "Mercado",
  edad: 21,
}; // tipo objeto - object
let existePapaNoel = false; // boolean v o f
let programacion = true; // boolean v o f

// log variables
console.log("APRENDIENDO VARIABLES");
console.log(edad);
console.log(nombre);
console.log(apellido);
console.log(clases);
console.log("Cantidad de elementos del array clases -> " + clases.length);
console.log(persona);
console.log(existePapaNoel);
console.log(programacion);

// nombrar variables

let apelNom = "Pepito Juarez"; // camelCase
let apel_nom = "Don Web"; // snakeCase

// ejemplo diferenciando variables
let miEdad = 21;
let MiEdad = 21;

let miPerro = "kobe"; // -> comillas aceptadas para strings "" o ''

// probando reasignar con let
let otherPI = 3.1415;
otherPI = 100;
console.log("otherPI -> " + otherPI);

// probando ej de clase | entendiendo constantes
// const PI = 3.1415;
// PI = 100; // reasignacion errónea
// console.log(PI);

console.log("PROBANDO OPERADORES ARITMETICOS");

let numero = 120;
let otroNumero = 20;
let tercerNumero = 20;
let resultado = numero + otroNumero;
console.log("Resultado ->", resultado);

let a = 10;
console.log("a -> " + a);
a++; // es lo mismo que hacer a = a+1
console.log("a -> " + a);

//concatenacion
console.log("CONCATENACION");
let nomb = "Marcos";
let apel = "Mercado";

console.log(nomb + " " + apel);
console.log(nomb, " ", apel);

// operadores logicos
console.log("OPERADORES LOGICOS");
let comparacion = numero < otroNumero;
console.log("Valor de la comparacion->", comparacion); // ?
console.log("verificando igualdad 120==20 ->", numero == tercerNumero);
console.log("verificando igualdad 20==20 ->", otroNumero == tercerNumero);
console.log("verificando desigualdad 120!=20 ->", numero != tercerNumero);
console.log("verificando desigualdad 20!=20 ->", otroNumero != tercerNumero);

console.log("usando and (&&) -> ", numero == 120 && otroNumero == 20); // AMBAS TRUE
console.log("usando and (&&) -> ", numero == 120 && otroNumero == 30); // and tiene que cumplir con ambas condiciones

console.log("usando OR (||) -> ", numero == 120 || otroNumero == 20); // UNA DE ELLAS
console.log("usando OR (||) -> ", numero == 120 || otroNumero == 30); // OR tiene que cumplir con alguna de las condiciones

let unaVariable = true;
let otraVariable = false;

console.log("Negando unaVariable(true) ->", !unaVariable); // si esta es true ahora es false y viceversa
console.log("Negando otraVariable(false) ->", !otraVariable); // si esta es true ahora es false
