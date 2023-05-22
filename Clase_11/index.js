let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edads");
}
const nota = 10;
switch (nota) {
  case nota > 7:
    console.log("aprobado");
    break;
  case nota > 9:
    console.log("muy aprobado");
    break;
  default:
    console.log("desaprobado");
    break;
}

const nombres = ["MARCOS", "PRISCILA", "RAMIRO"];
for (let index = 0; index < nombres.length; index++) {
  console.log("vuelta ", index);
  console.log(nombres[index]);
}

const frutas = ["🍎", "🍏"];
for (let index = 0; index < frutas.length; index++) {
  console.log("El elemento es: ", frutas[index]);
}

const otrosNombres = ["MARCOS", "PRISCILA", "RAMIRO"];
otrosNombres.push("NATALIA");
console.log(otrosNombres);
otrosNombres.pop();
console.log(otrosNombres);

let count = 50;
let contador = 0;
while (count > contador) {
  console.log("Hola chicos RD");
  contador++;
}
