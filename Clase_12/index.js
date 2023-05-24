//FUNCIONES

//Funcion sumar

// function sumar(n1, n2) {
//   console.log(n1 + n2);
// }

//Arrow function - fUNCION FLECHA
const sumar2nums = (n1, n2) => {
  let resultado = n1 + n2;
  alert(`El resultado de ${n1} + ${n2} es : ${resultado}`);
  console.log(
    `Esto es un ejemplo de template literals mostrando el resultado: ${resultado}`
  );
};
// ${}-> TEMPLATE STRINGS - TEMPLATE LITERALES
// sumar2nums(100, 100); -> INVOCAR

// Mejora de funcion sumar y mostrar
const pedirYsumar = () => {
  let n1 = prompt("Ingrese un numero");
  let n2 = prompt("Ingrese otro numero");
  let resultado = parseInt(n1) + parseInt(n2);
  alert(`El resultado de ${n1} + ${n2} es : ${resultado}`);
};

// pedirYsumar();

const parOimpar = (num) => {
  if (num % 2 === 0) {
    return `El numero ${num} es par`;
  } else {
    return `El numero ${num} es impar`;
  }
};
let ingresaNum = prompt("Ingrese numero para verificar paridad");
let result = parOimpar(ingresaNum); // calcula y devuelve
alert(result);
// console.log(result);
// console.log("Desde clg", parOimpar(100));
// console.log("Desde clg", parOimpar(101));
