class Interfaz {
   constructor() {
      this.init();
      this.estado = document.getElementById(
         "resultado-eventos"
      );
   }

   init() {
      this.imprimirCategorias();
   }
   // -----------------------------------------------------
   imprimirCategorias() {
      const listaCategorias = eventBrite
         .obtenerCategorias()
         .then(({ categories }) => {
            const selectCategories = document.getElementById(
               "listado-categorias"
            );
            categories.forEach((element) => {
               const option = document.createElement(
                  "option"
               );
               option.value = element.id;
               option.appendChild(
                  document.createTextNode(
                     element.name_localized
                  )
               );
               selectCategories.appendChild(option);
            });
         });
   }
   // -----------------------------------------------------
   mostrarMensaje(mensaje, clases) {
      const div = document.createElement("div");
      div.classList = clases;
      div.appendChild(document.createTextNode(mensaje));
      const buscador = document.getElementById("buscador");
      buscador.appendChild(div);
      setTimeout(() => {
         this.limpiarMensaje(div);
      }, 3000);
   }
   limpiarMensaje(div) {
      div.remove();
   }
}
