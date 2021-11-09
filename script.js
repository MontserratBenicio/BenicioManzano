"use strict";
let forma = document.getElementById("forma"),
  salidaTor = document.getElementById("salidaTortitas"),
  salidaPrecio = document.getElementById("salidaPrecio"),
  tortas = document.getElementsByName("tortitas"),
  precio = document.getElementsByName("precio");
forma.addEventListener("click", validaTorta, false);
function validaTorta() {
  const arrTortas = [];
  let total = 0;
  for (let i = 0; i < tortas.length; i++) {
    let tor = tortas[i];
    if (tor.checked) {
      arrTortas.push(tor.value);
      switch (tor.value) {
        case "Hawaiana":
          total += 45;
          break;
        case "Cubana":
          total += 50;
          break;
        case "Mexicana":
          total += 60;
          break;
        case "Española":
          total += 50;
          break;
        case "Suiza":
          total += 90;
          break;
        case "Jamon":
          total += 40;
          break;
      }
    }
  }
  console.log(total);
 /*  salidaTor.textContent = " " + arrTortas.join(", ") + "\n" +  "Total a  pagar: $" + total; */
 salidaTor.textContent = " " + arrTortas.join(", ") ;
 salidaPrecio.textContent = "$"+total;


}
