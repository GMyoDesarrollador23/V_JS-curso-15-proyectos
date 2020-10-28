// variables
const listaTweets = document.getElementById("lista-tweets");

//eventos
eventListeners();
function eventListeners() {
   document
      .querySelector("#formulario")
      .addEventListener("submit", agregarTweets);

   //   borrar tweet
   listaTweets.addEventListener("click", borrarTweets);

   //    cargando contenido
   document.addEventListener(
      "DOMContentLoaded",
      localStorageListo
   );
}

//funciones*************************************************
// -------------------------------------------------
function agregarTweets(e) {
   e.preventDefault();

   //    nodo que contiene la info
   const tweet = document.getElementById("tweet").value;

   //    creando el boton de borrar
   const borrar = document.createElement("a");
   borrar.classList.add("borrar-tweet");
   borrar.textContent = "X";

   //    creando el elemento del tweet
   const li = document.createElement("li");
   li.textContent = tweet;
   li.appendChild(borrar);
   listaTweets.appendChild(li);

   //    aregar a localStorage
   agragarTweetLocalStorage(tweet);
}

// -------------------------------------------------
function borrarTweets(e) {
   e.preventDefault();

   if (e.target.className === "borrar-tweet") {
      e.target.parentElement.remove();
      borrarTweeteLocalStorage(
         e.target.parentElement.textContent
      );
   } else {
      console.log("no elimninado");
   }
}

// -------------------------------------------------
function localStorageListo() {
   let tweets;
   tweets = obtenerTweetLocalStorage();
   tweets.forEach((tweet) => {
      //    creando el boton de borrar
      const borrar = document.createElement("a");
      borrar.classList.add("borrar-tweet");
      borrar.textContent = "X";

      //    creando el elemento del tweet
      const li = document.createElement("li");
      li.textContent = tweet;
      li.appendChild(borrar);
      listaTweets.appendChild(li);
   });
}

// -------------------------------------------------
function agragarTweetLocalStorage(tweet) {
   let tweets = obtenerTweetLocalStorage();
   tweets.push(tweet);
   localStorage.setItem("tweets", JSON.stringify(tweets));
}

// -------------------------------------------------
function obtenerTweetLocalStorage() {
    let tweets =
    JSON.parse(localStorage.getItem("tweets")) || [];
    return tweets;
}

// -------------------------------------------------
function borrarTweeteLocalStorage(tweet = "") {
    let tweetes;
    let tweeteBorrar;
    tweeteBorrar = tweet.substring(0, tweet.length - 1);
    
    tweetes = obtenerTweetLocalStorage();
    tweetes.forEach((tweet, index) => {
        if (tweet === tweeteBorrar) {
            tweetes.splice(index, 1);
        }
    });
    localStorage.setItem("tweets", JSON.stringify(tweetes));
}
