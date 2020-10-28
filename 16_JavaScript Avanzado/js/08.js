// ***************************************
// **************COMPOSICION**************
// ***************************************
// ***************************************
// funciones
const obtenerNombre = (info) => ({
   mostrarNombre() {
      console.log(`Nombre: ${info.nombre}`);
   },
});
const guardarEmail = (info) => ({
   email(email) {
      console.log(`Guardando Email en ${info.nombre}`);
      info.email = email;
   },
});
const obtenerEmail = (info) => ({
   mostrarEmail() {
      console.log(`Nombre: ${info.email}`);
   },
});

// ***************************************
// ***************************************
function Cliente(nombre, email, empresa) {
   let info = {
      nombre,
      email,
      empresa,
   };
   // asignando la informacion y las funciones
   return Object.assign(
      info,
      obtenerNombre(info),
      guardarEmail(info),
      obtenerEmail(info)
   );
}

// ------------------------------------
// ------------------------------------
function Empleado(nombre, email, puesto) {
   let info = {
      nombre,
      email,
      puesto,
   };
   // asignando la informacion y las funciones
   return Object.assign(
      info,
      obtenerNombre(info),
      guardarEmail(info),
      obtenerEmail(info)
   );
}

// ***************************************
// ***************************************
const cliente = Cliente("Gerardo");
const empleado = Empleado("Pedro");

cliente.email("emailde alguien");
cliente.mostrarNombre();
cliente.mostrarEmail();

empleado.email("emailde alguien");
empleado.mostrarEmail();
empleado.mostrarNombre();
