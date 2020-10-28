class API {
   async obtenerDatos() {
      const total = 1000;
      const url = `https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`;
      const datos = await fetch(url);
      
      return await datos.json();
   }
}
