// WINDOW BINDING
function obtenerAuto() {
   console.log(`mi auto es color ${this.color}`);
}

const color = "negro";
window.color = color;
obtenerAuto();
