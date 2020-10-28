// this con IMPLICIT BLINDING
// this tiene abceso a los elementos de un objeto

const usuario = {
   nombre: "Gerardo",
   edad: 24,
   presentacion() {
      console.log(
         `Minombre es ${this.nombre} y tengo ${this.edad}`
      );
   },
   mascota: {
      nombre: "Hook",
      edad: 1,
      presentacion() {
         console.log(
            `Minombre es ${this.nombre} y tengo ${this.edad}`
         );
      },
   },
};
usuario.presentacion();
usuario.mascota.presentacion();
