// toString
// --------------------------------------
// --------------------------------------
function sumar(a, b) {
   return a + b;
}
console.log(sumar);
console.log(sumar.toString());

// --------------------------------------
// --------------------------------------
function automovil(modelo, color) {
   this.modelo = modelo;
   this.color = color;
}

// ***************************************
// ***************************************
automovil.prototype.toString = function autoString() {
   return `Auto ${this.modelo} y color ${this.color} `;
};

const auto = new automovil("Camaro", "negro");
console.log(auto);
console.log(auto.toString());
