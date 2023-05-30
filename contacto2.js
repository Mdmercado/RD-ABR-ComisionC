console.log("enlazado");
let form = document.getElementById("form"); // hace referencia a un elemnto html cuyo id es el especificado
// una vez tengo mi form referenciado, escucho un evento submit y ejecuto algo.
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevengo el comportamiento por defecto
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  //validacion de campos
  if (!nombre.value.length > 0 || !apellido.value.length > 0) {
    alert("Completa el formulario para poder enviarlo"); // alert para darle aviso al cliente
  } else {
    let subscripcion = prompt(
      "¿Deseas dirigirte a whsatsapp? 1 para si 2 para no"
    );
    if (subscripcion != "1") {
      alert("Gracias por visitar mi pagina, vuelva prontos");
    } else {
      window.location.href = `https://wa.me/954524530?text=Hola%20soy%20${nombre.value}%20${apellido.value}%20quiero%20hacer%20una%20compra`;
    }
  }
});
