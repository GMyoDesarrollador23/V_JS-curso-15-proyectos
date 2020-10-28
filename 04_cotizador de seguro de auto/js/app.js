// ******************************************************
// constructo para seguro
function Seguro(marca, anio, tipo) {
   this.marca = marca;
   this.anio = anio;
   this.tipo = tipo;
}

// -----------------------------------------------------
Seguro.prototype.cotizarSeguro = function () {
   // 1 = americano = 1.15
   // 2 = asiatico = 1.05
   // 3 = europero = 1.35

   let cantidad;
   const base = 2000;
   switch (this.marca) {
      case "1":
         cantidad = base * 1.15;
         break;
      case "2":
         cantidad = base * 1.05;
         break;
      case "3":
         cantidad = base * 1.35;
         break;
   }
   // obtener el anio
   const diferencia = new Date().getFullYear() - this.anio;

   //cada anio de diferencia hy que reducir en un 3% del seguro
   cantidad -= (diferencia * 3 * cantidad) / 100;

   //    calcular el tipo de seguro
   if (this.tipo == "basico") {
      cantidad *= 1.3;
   } else {
      cantidad *= 1.5;
   }

   return cantidad;
};

// todo lo que se mustra
function Interfas() {}
// -----------------------------------------------------
Interfas.prototype.mostrarMensaje = function (mensaje, tipo) {
   const div = document.createElement("div");

   if (tipo == "error") {
      div.classList.add("error", "mensaje");
   } else {
      div.classList.add("correcto", "mensaje");
   }
   div.innerHTML = `${mensaje} `;
   formulario.insertBefore(
      div,
      document.querySelector(".form-group")
   );
   setTimeout(() => {
      document.querySelector(".mensaje").remove();
   }, 3000);
};

Interfas.prototype.mostrarResultado = function (
   seguro,
   total
) {
   let marca;
   switch (seguro.marca) {
      case "1":
         marca = "Americano";
         break;
      case "2":
         marca = "Asiatico";
         break;
      case "3":
         marca = "Europoe";
         break;
   }
   const div = document.createElement("div");
   div.innerHTML = `
        <p class="header"><b> TU RESUMEN:</b></p>
        <p>    <b>Marca:</b> ${marca}</p>
        <p>    <b>Año:</b> ${seguro.anio}</p>
        <p>    <b>Tipo:</b> ${seguro.tipo}</p>
        
        <p><b>TOTAL:</b> ${total}</p>
   `;
   const spinner = document.querySelector('#cargando img')
   spinner.style.display = 'block'
   setTimeout(() => {
       spinner.style.display = 'none'
       resultado.appendChild(div);
   }, 3000);
};

// ***********************************************************
const max = new Date().getFullYear();
const min = max - 20;
const selectAnios = document.getElementById("anio");
const formulario = document.getElementById(
   "cotizar-seguro"
);
const resultado = document.getElementById("resultado");

for (let i = max; i > min; i--) {
   let option = document.createElement("option");
   option.value = i;
   option.innerHTML = i;
   selectAnios.appendChild(option);
}

// *********************************************************
// EventListener
formulario.addEventListener("submit", (e) => {
   e.preventDefault();
   //    leer la marca seleccionada
   const marca = document.getElementById("marca");
   const marcaSeleccionada =
      marca.options[marca.selectedIndex].value;

   //   leer el anio seleccionado del <select>
   const anio = document.getElementById("anio");
   const anioSeleccionada =
      anio.options[anio.selectedIndex].value;

   //   leer el valor de los radios button
   const tipo = document.querySelector(
      'input[name="tipo"]:checked'
   ).value;

   //    crear instancia de interfas
   const interfas = new Interfas();
   if (
      marcaSeleccionada === "" ||
      anioSeleccionada === "" ||
      tipo === ""
   ) {
      interfas.mostrarMensaje(
         "faltan datos, revisa y prueba de nuevo",
         "error"
      );
   } else {
      //    limpiar el resultado
      const result = resultado.querySelector('div')
      if (result) {
          result.remove()
      }
      const seguro = new Seguro(
         marcaSeleccionada,
         anioSeleccionada,
         tipo
      );
      //   cotizar seguro
      const cantidad = seguro.cotizarSeguro();
      interfas.mostrarResultado(seguro, cantidad);
      interfas.mostrarMensaje(
        "Cotizando...",
        "exito"
     );

   }
});
