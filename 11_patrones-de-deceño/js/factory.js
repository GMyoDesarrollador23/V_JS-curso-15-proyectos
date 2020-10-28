// ***************FACTPRY***************

// DEPENDIENDO DEL PARAMETRO SE COMPORTA DE CIERTA MANERA
function construccionSitio() {
   this.crearElemento = function (texto, tipo) {
      let html;
      switch (tipo) {
         case "input":
            html = new InputHTML(texto);
            break;

         case "img":
            html = new ImagenHTML(texto);
            break;

         case "h1":
            html = new HeadingHTML(texto);
            break;

         case "p":
            html = new ParrafoHTML(texto);
            break;

         default:
            console.error("entrada no valida");
            break;
      }
      // **********************************************
      html.tipo = tipo;

      html.mostrar = function () {
         const elemeto = document.createElement(this.tipo);
         switch (this.tipo) {
            case "input":
               elemeto.setAttribute(
                  "placeholder",
                  this.texto
               );
               break;
            case "img":
               elemeto.setAttribute("src", this.texto);
               break;

            default:
               elemeto.appendChild(
                  document.createTextNode(this.texto)
               );
               break;
         }
         // agregando a la app
         document
            .querySelector("#app")
            .appendChild(elemeto);
      };

      return html;
   };
}

// ********************************************************
// ********************************************************
const InputHTML = (texto) => {
   this.texto = texto;
};
const ImagenHTML = (texto) => {
   this.texto = texto;
};
const HeadingHTML = (texto) => {
   this.texto = texto;
};
const ParrafoHTML = (texto) => {
   this.texto = texto;
};

// ********************************************************
const sitioWep = new construccionSitio();

// ********************************************************
// ********************************************************
const elementosWeb = [];
elementosWeb.push(
   sitioWep.crearElemento("bienvenidos", "h1")
);
elementosWeb.push(
   sitioWep.crearElemento(
      "bienvenidos a mi nuevo sitio",
      "p"
   )
);
elementosWeb.push(
   sitioWep.crearElemento("logo.svg", "img")
);
elementosWeb.push(
   sitioWep.crearElemento("contacto", "input")
);

elementosWeb.forEach((e) => {
   e.mostrar();
});
