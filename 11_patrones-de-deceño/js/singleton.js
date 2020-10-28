// ***************SINGLETON***************

// DEFINE LA CREACION DE UBJETOS CON SOLO UNA INSTACIA
// CON TODA LA FUNCIONALIDAD
// ***************************************************
// ***************************************************
let alumnos = {
   // ---------------------------------------
   listaAlumno: [],
   get: function (id) {
      return this.listaAlumno[id];
   },
   crear: function (datos) {
      this.listaAlumno.push(datos);
   },
   listado: function () {
      return this.listaAlumno;
   },
};

// ---------------------------------------
// ---------------------------------------
const infoAlumno = {
   nombre: "juan",
   edad: 23,
};
const infoAlumno2 = {
   nombre: "pablo",
   edad: 20,
};

// ---------------------------------------
// ---------------------------------------
alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);

const listados = alumnos.listado();
console.log(listados);

const alumno = alumnos.get(1);
console.log(alumno);
