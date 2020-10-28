const eventBrite = new EventBrite();
const ui = new Interfaz();
const buscarBtn = document.getElementById("buscarBtn");

buscarBtn.addEventListener("click", (e) => {
   e.preventDefault();

   //    obtener el valor de los campos
   const textoBuscador = document.getElementById("evento")
      .value;
   const categorias = document.getElementById(
      "listado-categorias"
   );
   const categoriaSeleccionada =
      categorias.options[categorias.selectedIndex].value;

   if (textoBuscador) {
      eventBrite.obtenerEventos(
         textoBuscador,
         categoriaSeleccionada
      ).then((e)=>{
          console.log(e);
      });
   } else {
      ui.mostrarMensaje(
         "escribe algo en el buscador",
         "alert alert-danger mt-4 text-center"
      );
   }
});
