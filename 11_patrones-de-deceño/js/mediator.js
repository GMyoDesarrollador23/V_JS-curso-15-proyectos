// es un variante del observe
// es un mediador

// *****************************************
// *****************************************
const Vendedor = function (nombre) {
   this.nombre = nombre;
   this.sala = null;
};

const Comprador = function (nombre) {
   this.nombre = nombre;
   this.sala = null;
};

// *****************************************
// *****************************************
Vendedor.prototype = {
   oferta: function (articulo, precio) {
      console.log(
         `Tenemos el siguente articulo ${articulo}, iniciamos en ${precio}`
      );
   },
   vendido: function (comprador) {
      console.log(
         `Vendido a ${comprador} (sonido de mazo)`
      );
   },
};

Comprador.prototype = {
   oferta: function (mensaje, comprador) {
      console.log(`${comprador.nombre}: ${mensaje}`);
   },
};

const Subasta = function () {
   let compradores = {};
   return {
      registrar: function (usuario) {
         compradores[usuario.nombre] = usuario;
         usuario.sala = this;
      },
   };
};

// instanciar las clases
// ***************************************
// ***************************************
// COMPRADORES
const juan = new Comprador("juan");
const pablo = new Comprador("pablo");
const Karen = new Comprador("Karen");

// VENDEDOR
const vendedor = new Vendedor("Vendedor");

// SUBASTA
const subasta = new Subasta();

// ***************************************
// ***************************************
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(Karen);

vendedor.oferta("mustan 1966", 3000);
juan.oferta(3500, juan);
juan.oferta(4500, pablo);
juan.oferta(10000, Karen);
vendedor.vendido(Karen.nombre);

console.log(subasta);
