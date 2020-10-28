// TODO-VARIABLES************************************************
const carrito = document.getElementById("carrito");
const cursos = document.getElementById("lista-cursos");
const vaciarCarritoBtn = document.getElementById(
   "vaciar-carrito"
);
const listaCurso = document.querySelector(
   "#lista-carrito tbody"
);

// TODO-LISTENERS************************************************
cargarEventListeners();
function cargarEventListeners() {
   // dipara cuando se agraga un carrioto
   cursos.addEventListener("click", comprarCurso);

   //    eliminar el curso del carrito
   carrito.addEventListener("click", eliminarCurso);

   //    eliminar el curso del carrito
   vaciarCarritoBtn.addEventListener(
      "click",
      vaciarCarrito
   );

   document.addEventListener(
      "DOMContentLoaded",
      leerLocalStorage
   );
}

// TODO-FUNCIONES************************************************
// -------------------------------------------
function comprarCurso(e) {
   e.preventDefault();

   //    agragar carrito
   if (e.target.classList.contains("agregar-carrito")) {
      const curso = e.target.parentElement.parentElement;
      //   enviar el curso seleccionado
      leerDatosCursos(curso);
   }
}

// ------------------------------------------
function leerDatosCursos(curso) {
   const infoCurso = {
      imagen: curso.querySelector("img").src,
      titulo: curso.querySelector("h4").textContent,
      id: curso.querySelector("a").getAttribute("data-id"),
      precio: curso.querySelector(".precio span")
         .textContent,
   };
   insertarCarrito(infoCurso);
}

// ------------------------------------------
function insertarCarrito(curso) {
   const row = document.createElement("tr");
   row.innerHTML = `
    <td><img src="${curso.imagen}" width=100 ></td>
    <td>${curso.titulo}</td>
    <td>${curso.precio}</td>
    <td>
    <a href="#" class="borrar-curso" data-id="${curso.id}">
    X
    </a>
    </td>
    `;
   listaCurso.appendChild(row);
   guardarCursoLocalStorage(curso);
}

// ------------------------------------------
function eliminarCurso(e) {
   e.preventDefault();
   let curso;
   let cursoId;
   if (e.target.classList.contains("borrar-curso")) {
      e.target.parentElement.parentElement.remove();
      curso = e.target.parentElement.parentElement;
      cursoId = curso
         .querySelector("a")
         .getAttribute("data-id");
      eliminarcursoLocalStorage(cursoId);
   }
}

// ------------------------------------------
function vaciarCarrito() {
   //forma lenta
   //    listaCurso.innerHTML = "";
   //forma rapida
   while (listaCurso.firstChild) {
      listaCurso.removeChild(listaCurso.firstChild);
   }
   vaciarLocalStorage();
   return false;
}
// ------------------------------------------
function guardarCursoLocalStorage(curso) {
   let cursos = [];
   cursos = obtenercursoLocalsorage();
   cursos.push(curso);
   localStorage.setItem("cursos", JSON.stringify(cursos));
}

// ------------------------------------------
function obtenercursoLocalsorage() {
   return JSON.parse(localStorage.getItem("cursos")) || [];
}
// ------------------------------------------
function leerLocalStorage() {
   let cursosLS = obtenercursoLocalsorage();
   for (const curso of cursosLS) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><img src="${curso.imagen}" width=100 ></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
        <a href="#" class="borrar-curso" data-id="${curso.id}">
        X
        </a>
        </td>
        `;
      listaCurso.appendChild(row);
   }
}

// ------------------------------------------
function eliminarcursoLocalStorage(id) {
   let cursosLS = [];
   cursosLS = obtenercursoLocalsorage();
   cursosLS.forEach((curso, index) => {
      if (curso.id === id) {
         cursosLS.splice(index, 1);
         console.log(curso.id, id);
      }
   });
   localStorage.setItem("cursos", JSON.stringify(cursosLS));
}

// ------------------------------------------
function vaciarLocalStorage() {
   localStorage.clear();
}
