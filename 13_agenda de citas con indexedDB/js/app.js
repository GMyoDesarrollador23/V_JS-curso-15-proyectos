// referencia a la base de datos
let DB;

// ***************************************************
// *************SELECTORES DE LA INTERFAZ*************
// ***************************************************
const form = document.querySelector("form");
const nombreMascota = document.querySelector("#mascota");
const nombreCliente = document.querySelector("#cliente");
const telefono = document.querySelector("#telefono");
const fecha = document.querySelector("#fecha");
const hora = document.querySelector("#hora");
const sintomas = document.querySelector("#sintomas");
const citas = document.querySelector("#citas");
const headingAdministra = document.querySelector(
   "#administra"
);

// ***************************************************
// ***********TRABAJAR CON LA BASE DE DATOS***********
// ***************************************************
document.addEventListener("DOMContentLoaded", () => {
   // crear la base de datos
   let crearDB = window.indexedDB.open("citas", 1);

   // si hay un error enviar a la consola
   crearDB.onerror = function () {
      console.log("hubo un error");
   };

   // si todo esta bien entonces mostrar en la consola
   // y asicna la nbase de datos
   crearDB.onsuccess = function () {
      DB = crearDB.result;
      mostrarCitas();
   };

   // este metodo solo corre una vez
   // metodo para crear el esquema de la db
   crearDB.onupgradeneeded = function (e) {
      // el evento es la misma base de datos
      let db = e.target.result;

      //   definir el objetStore
      let objetStore = db.createObjectStore("citas", {
         keyPath: "key",
         autoIncrement: true,
      });

      // ----------------------------------------
      // -------crear los campos de la db-------
      // ----------------------------------------
      objetStore.createIndex("mascota", "mascota", {
         unique: false,
      });
      objetStore.createIndex("cliente", "cliente", {
         unique: false,
      });
      objetStore.createIndex("telefono", "telefono", {
         unique: false,
      });
      objetStore.createIndex("fecha", "fecha", {
         unique: false,
      });
      objetStore.createIndex("hora", "hora", {
         unique: false,
      });
      objetStore.createIndex("sintomas", "sintomas", {
         unique: false,
      });
      console.log("base de datos creada y lista");
   };

   // evento de envio del formulario
   form.addEventListener("submit", agragarDatos);
   function agragarDatos(e) {
      e.preventDefault();

      // objeto de la nueva cita
      const nuevaCita = {
         mascota: nombreMascota.value,
         cliente: nombreCliente.value,
         telefono: telefono.value,
         fecha: fecha.value,
         hora: hora.value,
         sintomas: sintomas.value,
      };

      // ---------------------------------------------
      // ---------insertar los datos en la db---------
      // ---------------------------------------------

      // crear la transaccion de la db
      let transaction = DB.transaction(
         ["citas"],
         "readwrite"
      );

      // crear el object store para inseratar los datos
      let objectStore = transaction.objectStore("citas");

      // insetar los datos
      let peticion = objectStore.add(nuevaCita);

      // cuado se inserta se resetea el formulario
      peticion.onsuccess = () => {
         form.reset();
      };

      // cuando se complete la transaccion se muestran los datos
      transaction.oncomplete = () => {
         mostrarCitas();
         console.log("cita agregada");
      };

      // si la transaccion tiene un error muestra un mensaje
      transaction.onerror = () => {
         console.log("hubo un error");
      };
   }

   // ******************************************
   // ************mostrar las citas************
   // ******************************************
   function mostrarCitas() {
      // limpiar las citas anteriores
      while (citas.firstChild) {
         citas.removeChild(citas.firstChild);
      }

      // creamos un ojectStore
      let objectStore = DB.transaction("citas").objectStore(
         "citas"
      );

      // retorna una peticion
      objectStore.openCursor().onsuccess = (e) => {
         // cursor se va ubicando el cada registro de la db
         let cursor = e.target.result;

         // si exite el cursos crear las citas
         // el cursos exite siempre y cuando haya registros
         if (cursor) {
            // creando las citas
            let citasHtml = document.createElement("li");

            // insertar el indice como atriburo
            citasHtml.setAttribute(
               "data-cita-id",
               cursor.value.key
            );

            citasHtml.classList.add("list-group-item");

            citasHtml.innerHTML = `
            <p class ="font-weight-bold">
            Mascota: 
            <span class="font-weight-normal">
            ${cursor.value.mascota}
            </span>
            </p>

                <p class ="font-weight-bold">
                Cliente: 
                <span class="font-weight-normal">
                ${cursor.value.cliente}
                </span>
                </p>
                
                <p class ="font-weight-bold">
                Telefono: 
                <span class="font-weight-normal">
                ${cursor.value.telefono}
                </span>
                </p>
                
                <p class ="font-weight-bold">
                Fecha: 
                <span class="font-weight-normal">
                ${cursor.value.fecha}
                </span>
                </p>
                
                <p class ="font-weight-bold">
                Hora: 
                <span class="font-weight-normal">
                     ${cursor.value.hora}
                  </span>
                  </p>
                  
                  <p class ="font-weight-bold">
                  Sintomas: 
                  <span class="font-weight-normal">
                  ${cursor.value.sintomas}
                  </span>
                  </p>
                  
                  `;

            // agragando el boton de borrar
            const botonBorrar = document.createElement(
               "button"
            );
            botonBorrar.classList.add(
               "borrar",
               "btn",
               "btn-danger"
            );
            botonBorrar.innerHTML =
               '<span aria-hidden="true">x</span> Borrar';
            botonBorrar.onclick = borrarCita;
            citasHtml.appendChild(botonBorrar);

            // insertardo la cita en el documento
            citas.appendChild(citasHtml);

            // tomar los proximos registros
            cursor.continue();
         } else {
            // si no hay citas
            if (!citas.firstChild) {
               headingAdministra.textContent =
                  "Agraga citas para comensar";

               // crear un parrafo
               let listado = document.createElement("p");
               listado.classList.add("text-center");
               listado.textContent = "No hay registros";

               // insertando el parrafo en el documento
               citas.appendChild(listado);
            } else {
               // si hay citas
               headingAdministra.textContent =
                  "Administra tus citas";
            }
         }
      };
   }

   // ******************************************
   // *************borrar las citas*************
   // ******************************************
   function borrarCita(e) {
      // obtner el id del registro
      let citaId = Number(
         e.target.parentElement.getAttribute("data-cita-id")
      );

      // crear la transaccion
      let transaction = DB.transaction(
         ["citas"],
         "readwrite"
      );

      // creamos el object store
      let objectStore = transaction.objectStore("citas");

      // eliminamos la cita
      let peticion = objectStore.delete(citaId);

      // eliminar la cita del documento
      transaction.oncomplete = () => {
         e.target.parentElement.parentElement.removeChild(
            e.target.parentElement
         );
         console.log(
            `se elmino la cia con el id ${citaId}`
         );
         if (!citas.firstChild) {
            headingAdministra.textContent =
               "Agraga citas para comensar";
            let listado = document.createElement("p");
            listado.classList.add("text-center");
            listado.textContent = "No hay registros";
            citas.appendChild(listado);
         } else {
            headingAdministra.textContent =
               "Administra tus citas";
         }
      };
   }
});
