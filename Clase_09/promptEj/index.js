window.onload = function () {
  console.log("pagina cargada");
  alert("Pagina cargada");
};

function mostrarAlertaConEntrada() {
  let name = prompt("Por favor, ingresa tu nombre:"); //guarda entrada en la variable
  if (name !== null && name !== "") {
    let message = "Hola, " + name + "!Bienvenido a mi app JavaScript";
    alert(message);
  } else {
    alert("No ingresaste nada");
  }
}
