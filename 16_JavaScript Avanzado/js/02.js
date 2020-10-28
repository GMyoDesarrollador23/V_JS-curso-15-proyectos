// this con EXPLICIT BINDING

function persona(el1, el2) {
   console.log(
      `hola soy ${this.nombre} y me gusta el ${el1} y ${el2}`
      );
   }
const infromacion = {
   nombre: "Gerardo",
   trabajo: "Programador",
};

const generosMusicales = [
   "genero Musical 1",
   "genero Musical 2",
];

// explicit binding con call cuando pasa un arreglo debe de pasar todas las posiciones
persona.call(
   infromacion,
   generosMusicales[0],
   generosMusicales[1]
);

// con apply no es nesesario pasarle las posiciones
persona.apply(infromacion, generosMusicales);

// explict binding con bind
const nuevaPersona = persona.bind(
   infromacion,
   generosMusicales[0],
   generosMusicales[1]
);
nuevaPersona();
