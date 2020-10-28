class Api {
   // ----------------------------------------------
   constructor(apiKey) {
      this.apiKey = apiKey;
   }
   // ----------------------------------------------
   async obtenerMonedasApi() {
      const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;

      const urlObtenerMonedas = await fetch(url);
      const monedas = await urlObtenerMonedas.json();
      return {
         monedas,
      };
   }
   async obtenerValores(moneda, criptoMoneda) {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}&api_key=${this.apiKey}`;

      const urlConvertir = await fetch(url);
      const resultado = await urlConvertir.json();
      return resultado;
   }
}
