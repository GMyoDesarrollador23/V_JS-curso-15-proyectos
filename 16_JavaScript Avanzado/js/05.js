// JAVASCRIPT EVENT LOOP

// primero se ejecutan los que estan en el stack
// y despues los del queue

console.log("yo me mostrare primero");

setTimeout(() => {
   console.log("yo me mostrare segundo");
}, 0);

console.log("yo me mostrare tercero");

setTimeout(() => {
   console.log("yo me mostrare cuarto");
}, 0);

new Promise((res) => {
   res("yo soy un promise");
}).then((e) => console.log(e));

console.log("yo me mostrare quinto");
