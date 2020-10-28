class Interfaz {
   // ----------------------------------------------
   constructor() {
      this.init();
   }
   init() {
      this.construirSelect();
   }
   // ----------------------------------------------
   construirSelect() {
      cotizador.obtenerMonedasApi().then(({ monedas }) => {
         const arr = Object.entries(monedas.Data);
         const select = document.getElementById(
            "criptomoneda"
         );
         for (const [key, value] of arr) {
            // console.log(key);
            const option = document.createElement("option");
            option.value = value.Symbol;
            option.appendChild(
               document.createTextNode(value.CoinName)
            );
            select.appendChild(option);
         }
      });
   }
   // ----------------------------------------------
   mostrarMensaje(mensaje, clases) {
      const div = document.createElement("div");
      div.className = clases;
      div.appendChild(document.createTextNode(mensaje));

      const divMensaje = document.querySelector(
         ".mensajes"
      );
      divMensaje.appendChild(div);
      setTimeout(() => {
         div.remove();
      }, 3000);
   }
   // ----------------------------------------------
   mostrarResultado(resultado, moneda, crypto) {
      const resultadoAnterior = document.querySelector(
         "#resultado div"
      );
      if (resultadoAnterior) {
         resultadoAnterior.remove();
      }

      const datosMonedas = resultado[crypto][moneda];

      console.log(datosMonedas);
      let price = datosMonedas.PRICE.toFixed(2);
      let variacion = datosMonedas.CHANGEPCTDAY.toFixed(2);
      let actualizado = new Date(
         datosMonedas.LASTUPDATE * 1000
      ).toLocaleDateString("es-BO");
      let templateHtml = `
      <div class="card bg-warning">
        <div class="card-body text-light">
            <h2 class="card-title">Resultado:</h2>
            <p>
                El Precio de ${datosMonedas.FROMSYMBOL} a moneda ${datosMonedas.TOSYMBOL}  es de: $ ${price}
            </p>

            <p>Variacion ultimo dia: % ${variacion}</p>
            <p>ultima Actualizacion: % ${actualizado}</p>


        </div>

      </div>
      `;
      this.mostrarOcultarSpinner("block");
      setTimeout(() => {
         document.getElementById(
            "resultado"
         ).innerHTML = templateHtml;
         this.mostrarOcultarSpinner("none");
      }, 3000);
   }

   mostrarOcultarSpinner(vista) {
      const spinner = document.querySelector(
         ".contenido-spinner"
      );
      //  spinner.classList.toggle()
      spinner.style.display = vista;
   }
}
