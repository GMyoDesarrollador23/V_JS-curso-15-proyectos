// ***************MODULE PATTERNS***************

// SIMULAR VARIABLE PUBLICAS Y PRIVADAS
const comprarBoleto = (() => {
   // pribado
   let evento = "Conferencia js 2019";

   // let precio = 200;
   const adquirirEvento = () => {
      const elemento = document.createElement("p");
      elemento.textContent = `compreando boleto para ${evento}`;
      document.getElementById("app").appendChild(elemento);
   };

   // publico
   return {
      mostraBoleto: () => {
         adquirirEvento();
      },
   };
})();

comprarBoleto.mostraBoleto();

// no funciona
// console.log(evento);
// console.log(elemento);