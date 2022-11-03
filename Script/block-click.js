// Diseñado y Desarrollado por: CASTRO GALANTE, CARLOS JOSÉ | @carlosjcastrog
const body = document.getElementById('body');

window.onload = function() {
  document.addEventListener("contextmenu", function(e){
    e.preventDefault();
  }, false);
} 

body.addEventListener('click', () => {
  alert('La función ha sido bloqueada.')
  console.log("Función bloqueada.")
});
