// SE LE CONOCE COMO SUBCRIPTOR Y PUBLICADOR

let observer = {
   obtenerOfertas: function (callback) {
      if (typeof callback === "function") {
         this.subcribers[this.subcribers.length] = callback;
      }
   },
   canselarOfertas: function (callback) {
      for (let i = 0; i < this.subcribers.length; i++) {
         if (this.subcribers[i] === callback) {
            delete this.subcribers[i];
         }
      }
   },
   publicarOferta: function (oferta) {
      for (let i = 0; i < this.subcribers.length; i++) {
         if (typeof this.subcribers[i] === "function") {
            this.subcribers[i](oferta);
         }
      }
   },
   crear: function (objecto) {
      for (let i in this) {
         if (this.hasOwnProperty(i)) {
            objecto[i] = this[i];
            objecto.subcribers = [];
         }
      }
   },
};

// ****************************************
// ***************VENDEDORES***************
// ****************************************
const udemy = {
   nuevoCurso: function () {
      const curso = "nuevo curso de js";
      this.publicarOferta(curso);
   },
};

const facebook = {
   nuevoAnuncio: function () {
      const oferta = "compra un telefono";
      this.publicarOferta(oferta);
   },
};

// ****************************************
// ***********CREAR PUBLICADORES***********
// ****************************************
observer.crear(udemy);
observer.crear(facebook);

// ****************************************
// **************SUBCRIPTORES**************
// ****************************************
const juan = {
   compartir: function (oferta) {
      console.log("Juan dice: excelente oferta " + oferta);
   },
};

const karen = {
   interesa: function (oferta) {
      console.log(
         "Karen dice: me intersa la oferta " + oferta
      );
   },
};

udemy.obtenerOfertas(juan.compartir);
udemy.obtenerOfertas(karen.interesa);
udemy.nuevoCurso();
udemy.canselarOfertas(karen.interesa);
udemy.nuevoCurso();

facebook.obtenerOfertas(karen.interesa);
facebook.obtenerOfertas(juan.compartir);
facebook.nuevoAnuncio();
console.log(observer);
