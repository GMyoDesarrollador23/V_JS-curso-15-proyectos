// variables
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");
const formaularioEnviar = document.getElementById(
   "enviar-mail"
);
const resetBtn = document.getElementById("resetBtn");

// eventos
eventListener();
function eventListener() {
   // cargar la pagina
   document.addEventListener(
      "DOMContentLoaded",
      iniciarApp
   );
   //    campos del foenulario
   email.addEventListener("blur", validarCampo);
   asunto.addEventListener("blur", validarCampo);
   mensaje.addEventListener("blur", validarCampo);

   //boton de envir en el submit
   formaularioEnviar.addEventListener(
      "submit",
      enviarEmail
   );

   resetBtn.addEventListener("click", (e) => {
      e.preventDefault();
      formaularioEnviar.reset();
   });
}

// funciones
// --------------------------------------------------
function iniciarApp() {
   btnEnviar.disabled = true;
}

// --------------------------------------------------
function validarCampo() {
   // se valida la longitud del text
   validarLongitud(this);

   let errors = document.querySelectorAll(".error");

   if (this.type === "email") {
      validaremail(this);
   }

   if (
      email.value !== "" &&
      asunto.value !== "" &&
      mensaje.value !== ""
   ) {
      if (errors.length === 0) {
         btnEnviar.disabled = false;
      }
   }
}

// --------------------------------------------------
function validarLongitud(campo = document) {
   if (campo.value.length > 0) {
      campo.style.borderBottomColor = "green";
      campo.classList.remove("error");
   } else {
      campo.style.borderBottomColor = "red";
      campo.classList.add("error");
   }
}

// --------------------------------------------------
function validaremail(campo) {
   const mensaje = campo.value;
   if (mensaje.indexOf("@") !== -1) {
      campo.style.borderBottomColor = "green";
      campo.classList.remove("error");
   } else {
      campo.style.borderBottomColor = "red";
      campo.classList.add("error");
   }
}
// --------------------------------------------------
function enviarEmail(e) {
   // spinner al presionar enviar
   const spinnerGif = document.querySelector("#spinner");
   spinnerGif.style.display = "block";

   // enviar el emaila
   const enviado = document.createElement("img");
   enviado.src = "img/mail.gif";
   enviado.style.display = "block";

   //    ocultar spinnr
   setTimeout(() => {
      spinnerGif.style.display = "none";
      document
         .querySelector("#loaders")
         .appendChild(enviado);
      setTimeout(() => {
         enviado.remove();
         formaularioEnviar.reset();
      }, 5000);
   }, 3000);
   e.preventDefault();
}
