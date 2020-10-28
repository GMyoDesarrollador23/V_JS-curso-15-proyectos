class EventBrite {
   constructor() {
      this.tokenAuth = "ELR66I5IW2PVQELUKWKB";
      this.ordenar = "date";
   }
   // -------------------------------------------
   async obtenerEventos(evento, categoria) {
      const respuestaEvento = await fetch(
         `https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.tokenAuth}`
      );
      const eventos = await respuestaEvento.json();
      return eventos;
   }
   // -------------------------------------------
   async obtenerCategorias() {
      const respuestaCategorias = await fetch(
         `https://www.eventbriteapi.com/v3/categories/?token=${this.tokenAuth}`
      );
      const categorias = await respuestaCategorias.json();
      return categorias;
   }
}
