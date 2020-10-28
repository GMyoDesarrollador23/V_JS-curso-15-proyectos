// constsiste en tener un objeto de forma gloval para evitar,
// coliciones u conflictos en los nombres de las valiables o funciones

const restaurApp = {};
restaurApp.platillos = [
   {
      platillo: "Pizza",
      precio: 23,
   },
   {
      platillo: "Hamburgesa",
      precio: 20,
   },
   {
      platillo: "Hot dog",
      precio: 15,
   },
];

// Funciones
restaurApp.funciones = {
   ordenar: (id) => {
      console.log(
         `tu platillo ${restaurApp.platillos[id].platillo} se esta preparando`
      );
   },
   agragarPlatillo: (platillo, precio) => {
      const nuevo = {
         platillo,
         precio,
      };
      restaurApp.platillos.push(nuevo);
   },
   mostrarMenu: (platillos) => {
      console.log(`Bienvenido a nuestro menu: `);
      platillos.forEach((platillo, index) => {
         console.log(
            `${index}: ${platillo.platillo} - $${
               platillo.precio
            }`
         );
      });
   },
};

// console.log(restaurApp);

const {platillos} = restaurApp
restaurApp.funciones.mostrarMenu(platillos);
restaurApp.funciones.ordenar(1);

restaurApp.funciones.agragarPlatillo('Pastel', 30)
restaurApp.funciones.mostrarMenu(platillos);
restaurApp.funciones.ordenar(1);

