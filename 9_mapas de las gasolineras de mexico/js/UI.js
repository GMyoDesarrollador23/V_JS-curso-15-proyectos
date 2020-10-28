class UI {
   // --------------------------------------------------
   constructor() {
      this.api = new API();

      this.markers = new L.LayerGroup();

      // Iniciar el mapa
      this.mapa = this.inicializarMapa();
   }

   // --------------------------------------------------
   inicializarMapa() {
      // Inicializar y obtener la propiedad del mapa

      const map = L.map("mapa").setView(
         [19.390519, -99.3739778],
         6
      );

      const enlaceMapa =
         '<a href="http://openstreetmap.org">OpenStreetMap</a>';

      L.tileLayer(
         "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
         {
            attribution:
               "&copy; " + enlaceMapa + " Contributors",
            maxZoom: 18,
         }
      ).addTo(map);

      return map;
   }

   // --------------------------------------------------
   mostrarEstablecimientos() {
      this.api.obtenerDatos().then(({ results }) => {
         this.mostrarPines(results);
      });
   }
   
   // --------------------------------------------------
   mostrarPines(datos) {
      this.markers.clearLayers();

      datos.forEach(
         ({
            calle,
            regular,
            longitude,
            latitude,
            premium,
         }) => {
            const optionespopUp = L.popup().setContent(`
                <p>Calle: ${calle}</p>
                <p><b>Regular: ${regular}</b></p>
                <p>
                  <b>
                     Premiun: ${
                        premium || "no espesificado"
                     }
                  </b>
                </p>
                `);

            const marker = new L.marker([
               parseFloat(latitude),
               parseFloat(longitude),
            ]).bindPopup(optionespopUp);

            this.markers.addLayer(marker);
         }
      );

      this.markers.addTo(this.mapa);
   }

   // --------------------------------------------------
   obtenerSujerencias(busqueda) {
      this.api.obtenerDatos().then(({ results }) => {
         this.filtrarSugerencias(results, busqueda);
      });
   }
   
   // --------------------------------------------------
   filtrarSugerencias(resultado, busqueda) {
      const filtro = resultado.filter(
         (filtro) => filtro.calle.indexOf(busqueda) !== -1
      );
      this.mostrarPines(filtro);
   }
}
