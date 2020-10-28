import * as UI from "./interfaz.js";
import { API } from "./api.js";

const {
   divBuscar,
   formularioBuscar,
   divResltado,
   divMensajes,
} = UI;

formularioBuscar.addEventListener("submit", (e) => {
   e.preventDefault();

   //    obtner datos del formulario
   const artista = document.querySelector("#artista").value;
   const cancion = document.querySelector("#cancion").value;

   if (!artista || !cancion) {
      divMensajes.innerHTML =
         "Error... todos los campos son obligatoris";
      divMensajes.classList.add("error");

      setTimeout(() => {
         divMensajes.innerHTML = "";
         divMensajes.classList.remove("error");
      }, 3000);
   } else {
      const api = new API(artista, cancion); 

      api.consultarApi().then((e) => {
         if (e.lyrics) {
            const letra = e.lyrics;
            divResltado.textContent = letra
         } else {
            divMensajes.innerHTML =
               "Error... la cancion no existe ";
            divMensajes.classList.add("error");

            setTimeout(() => {
               divMensajes.innerHTML = "";
               divMensajes.classList.remove("error");
               formularioBuscar.reset();
            }, 3000);
         }
      });
   }
});
