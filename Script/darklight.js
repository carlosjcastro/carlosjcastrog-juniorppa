// Diseñado y Desarrollado por: CASTRO GALANTE, CARLOS JOSÉ | @carlosjcastrog
var darklight = document.getElementById("darklight");
darklight.onclick = function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    darklight.src = "/Imagenes/Menu/Moon.png";
  } else {
    darklight.src = "/Imagenes/Menu/Sun.png";
  }
}