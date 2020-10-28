// ***************BUILDER PATTERN***************

//SIMILAR A FACTORY

// ***************************************************
// ***************************************************
class Formulario {
   // constructor
   constructor() {
      this.campos = [];
   }

   // -------------------------------------
   // -------------------------------------
   agragarCampo(tipo, texto) {
      let campos = this.campos;
      let campo;

      switch (tipo) {
         case "text":
            campo = new InputText(texto);
            break;

         case "email":
            campo = new InputEmail(texto);
            break;

         case "button":
            campo = new Boton(texto);
            break;

         default:
            throw new Error(`tipo no valido: "${tipo}"`);
      }
      campos.push(campo);
   }
   
   // -------------------------------------
   // -------------------------------------
   obtenerFormulario() {
      let form = document.createElement("form");
      let campos = this.campos.length;
      let campo;
      for (let i = 0; i < campos; i++) {
         campo = this.campos[i];
         form.appendChild(campo.crearElemento());
         let br = document.createElement("br");
         form.appendChild(br);
      }
      return form;
   }
}
// ********************************************
// ---------------------------------------------
class Inpust {
   constructor(texto) {
      this.texto = texto;
   }
}

// ---------------------------------------------
class InputText extends Inpust {
   constructor(texto) {
      super(texto);
   }
   crearElemento() {
      const inputText = document.createElement("input");
      inputText.setAttribute("type", "text");
      inputText.setAttribute("placeholder", this.texto);
      return inputText;
   }
}

// ---------------------------------------------
class InputEmail extends Inpust {
   constructor(texto) {
      super(texto);
   }
   crearElemento() {
      const inputEmail = document.createElement("input");
      inputEmail.setAttribute("type", "email");
      inputEmail.setAttribute("placeholder", this.texto);
      return inputEmail;
   }
}

// ---------------------------------------------
class Boton extends Inpust {
   constructor(texto) {
      super(texto);
   }
   crearElemento() {
      const boton = document.createElement("button");
      boton.setAttribute("type", "submit");
      boton.textContent = this.texto;
      return boton;
   }
}

// *********************************************
// ---------------------------------------------
const formulario = new Formulario();

formulario.agragarCampo("text", "agraga tu nombre");
formulario.agragarCampo("text", "agraga tu apellido");
formulario.agragarCampo("email", "agraga tu email");
formulario.agragarCampo("button", "envia");

document.addEventListener("DOMContentLoaded", (e) => {
   document
      .getElementById("app")
      .appendChild(formulario.obtenerFormulario());
});

console.log(formulario);
