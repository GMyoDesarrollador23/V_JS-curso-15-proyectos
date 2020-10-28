// ************************************************************
// INSTANCIAS Y VALIABLES
// ************************************************************
const formlario = document.getElementById("formulario");

const cotizador = new Api(
   "277e85b842e7bcfe1804aef2827a353d696c640802eeaecc6cd66cae9312b4d9"
);
const ui = new Interfaz();

// ************************************************************
// EVENTOS
// ************************************************************
formlario.addEventListener("submit", (e) => {
   e.preventDefault();

   //    OBTENER LOS VALORES DE LOS CAMPOS
   const monedaSelect = document.getElementById("moneda");
   const monedaSeleccionada =
      monedaSelect.options[monedaSelect.selectedIndex]
         .value;

   const criptoMonedaSelect = document.getElementById(
      "criptomoneda"
   );
   const criptoMonedaSeleccionada =
      criptoMonedaSelect.options[
         criptoMonedaSelect.selectedIndex
      ].value;

   //    VERIFICAR QUE LOS CAMPOS TENGAN INFO
   if (!monedaSeleccionada || !criptoMonedaSeleccionada) {
      ui.mostrarMensaje(
         "Ambos campos son obligatorios",
         "alert bg-danger text-center"
      );
   } else {
      cotizador
         .obtenerValores(
            monedaSeleccionada,
            criptoMonedaSeleccionada
         )
         .then((e) => {
            ui.mostrarResultado(
               e.RAW,
               monedaSeleccionada,
               criptoMonedaSeleccionada
            );
         });
   }
});
