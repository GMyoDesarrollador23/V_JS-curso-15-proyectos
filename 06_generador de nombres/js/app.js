document
   .getElementById("generar-nombre")
   .addEventListener("submit", cargarNombres);

//    llamados ajax
function cargarNombres(e) {
   e.preventDefault();

   //    leer las vaiables
   const origen = document.getElementById("origen");
   const origenSeleccionado =
      origen.options[origen.selectedIndex].value;

   const genero = document.getElementById("genero");
   const generoSeleccionado =
      genero.options[genero.selectedIndex].value;

   const cantidad = document.getElementById("numero").value;
   let url = "";
   url += "http://uinames.com/api/?";

   if (origenSeleccionado) {
      url += `?region=${origenSeleccionado}&`;
   }
   if (generoSeleccionado) {
      url += `?gender=${generoSeleccionado}&`;
   }
   if (cantidad) {
      url += `?amount=${cantidad}&`;
   }

   const xhr = new XMLHttpRequest();
   xhr.open("GET", url, true);
   xhr.onload = function () {
      if (this.status === 200) {
         const nombre = JSON.parse(this.responseText);
         let htmlNombres = "<h2>Nombres Generados</h2>";
         htmlNombres += "<ul>Lista</ul>";
      }
   };
   xhr.send();
}
