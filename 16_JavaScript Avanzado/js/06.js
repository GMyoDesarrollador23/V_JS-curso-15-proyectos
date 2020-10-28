// clases y prototipos

function PlayList(nombre) {
   this.nombre = nombre;
}

PlayList.prototype.play = function () {
   console.log(`reproduciendo la playlist ${this.nombre}`);
};
PlayList.prototype.delete = function () {
   console.log(`eliminando la playlist ${this.nombre}`);
};

// ****************************************
// ****************************************
const playList = new PlayList("Rock 90s");
const playList2 = new PlayList("Punk 90s");

console.log(playList);
console.log(playList2);

playList.play();
playList2.delete();
