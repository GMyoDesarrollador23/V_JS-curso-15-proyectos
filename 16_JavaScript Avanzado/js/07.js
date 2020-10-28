// herencia via prototype

// ****************************************************
// ****************************************************
function PlayList(nombre) {
   this.nombre = nombre;
}

PlayList.prototype.play = function () {
   console.log(`reproduciendo la playlist ${this.nombre}`);
};
PlayList.prototype.delete = function () {
   console.log(`eliminando la playlist ${this.nombre}`);
};
// ****************************************************
// ****************************************************

// Herencia
function Cancion(nombre, genero) {
   PlayList.call(this, nombre);
   this.genero = genero;
}
Cancion.prototype = Object.create(PlayList.prototype);

// ****************************************************
// ****************************************************
const cancion = new Cancion("nombreCancion", "Algo no se");
cancion.play();
