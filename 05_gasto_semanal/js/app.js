// *********************************************************
// TODO-VARIABLES
// *********************************************************
let cantidadPresupuesto;
const presupuestoUsuario = prompt(
   "cual es tu presupuesto semanal"
);
const formulario = document.getElementById("agregar-gasto");
// *********************************************************
// TODO-CLASES
// *********************************************************
class Presupuesto {
   constructor(presupuesto) {
      this.presupuesto = Number(presupuesto);
      this.restante = Number(presupuesto);
   }
   presupuestoRestante(cantidad = 0) {
      return (this.restante -= Number(cantidad));
   }
}
// ---------------------------------------
class Interfaz {
   insertarPresupuesto(cantidad) {
      const presupuestoSpan = document.getElementById(
         "total"
      );
      const restanteSpan = document.getElementById(
         "restante"
      );
      //   insertar en js
      presupuestoSpan.innerHTML = `${cantidad}`;
      restanteSpan.innerHTML = `${cantidad}`;
   }
   // ---------------------------------------
   impremirMensaje(mensaje, tipo) {
      const divMensaje = document.createElement("div");
      divMensaje.classList.add("text-center", "alert");
      if (tipo == "error") {
         divMensaje.classList.add("alert-danger");
      } else {
         divMensaje.classList.add("alert-success");
      }
      divMensaje.appendChild(
         document.createTextNode(mensaje)
      );
      // insertar en el dom
      document
         .querySelector(".primario")
         .insertBefore(divMensaje, formulario);

      // quitar el error
      setTimeout(() => {
         // divMensaje.remove();
         document
            .querySelector(".primario .alert")
            .remove();
         formulario.reset();
      }, 3000);
   }
   // ---------------------------------------
   agragarGastoListado(nombreGasto, cantidadGasto) {
      const gastosListados = document.querySelector(
         "#gastos ul"
      );
      const li = document.createElement("li");
      li.className =
         "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
         <b>${nombreGasto}:</b>
         <span class="badge badge-primary badge-pill">${cantidadGasto}</span>
         `;
      gastosListados.appendChild(li);
   }
   // ---------------------------------------
   presupuestoRestante(cantidad) {
      const restante = document.getElementById("restante");
      const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(
         cantidad
      );
      restante.innerHTML = `${presupuestoRestanteUsuario}`;
      this.comprobarPresupuesto();
   }
   // ---------------------------------------
   comprobarPresupuesto() {
      const presupuestoTotal =
         cantidadPresupuesto.presupuesto;
      const presupuestoRestante =
         cantidadPresupuesto.restante;

      if (presupuestoTotal / 4 > presupuestoRestante) {
         const restante = document.querySelector(
            ".restante"
         );
         restante.classList.remove(
            "alert-success",
            "alert-warning"
         );
         restante.classList.add("alert-danger");
      } else if (
         presupuestoTotal / 2 >
         presupuestoRestante
      ) {
         const restante = document.querySelector(
            ".restante"
         );
         restante.classList.remove(
            "alert-success"
         );
         restante.classList.add("alert-warning");
      }
   }
}
// *********************************************************
// TODO-EVENTOS
// *********************************************************
document.addEventListener("DOMContentLoaded", () => {
   if (!presupuestoUsuario) {
      window.location.reload();
   } else {
      //    iniciando el presupuesto
      cantidadPresupuesto = new Presupuesto(
         presupuestoUsuario
      );
      //    iniciando la clase interfaz
      const ui = new Interfaz();
      ui.insertarPresupuesto(
         cantidadPresupuesto.presupuesto
      );
   }
});

formulario.addEventListener("submit", (e) => {
   e.preventDefault();
   const gasto = document.getElementById("gasto").value;
   const cantidad = Number(
      document.getElementById("cantidad").value
   );

   // instanciar la interfaz
   const ui = new Interfaz();
   if (!gasto || !cantidad) {
      ui.impremirMensaje("hubo un error", "error");
   } else {
      // insertar en el html
      ui.impremirMensaje("correcto", "correcto");
      ui.agragarGastoListado(gasto, cantidad);
      ui.presupuestoRestante(cantidad);
   }
});
