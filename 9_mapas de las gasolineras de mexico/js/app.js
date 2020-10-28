const ui = new UI();
const buscador = document.querySelector("#buscar input");
// ***********************************************
// ***********************************************

//------------------------------------------
window.document.addEventListener("DOMContentLoaded", () => {
   ui.mostrarEstablecimientos();
});

//------------------------------------------
buscador.addEventListener("input", (e) => {
   if (buscador.value.length > 5) {
      ui.obtenerSujerencias(buscador.value);
   } else {
      ui.mostrarEstablecimientos();
   }
});
