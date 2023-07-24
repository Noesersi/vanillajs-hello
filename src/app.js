/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronombres = ["el", "un"];
let sustantivos = [
  "perro",
  "gato",
  "cactus",
  "tronco",
  "alcantarilla",
  "anillo"
];
let adjetivos = ["loco", "grasiento", "maloliente"];
let extensiones = [".com", ".es", ".net"];

const generadorDeDominios = () => {
  let nombresDeDominio = [];

  for (let i = 0; i < pronombres.length; i++) {
    for (let j = 0; j < adjetivos.length; j++) {
      for (let k = 0; k < sustantivos.length; k++) {
        for (let l = 0; l < extensiones.length; l++) {
          let nombreDeDominio =
            pronombres[i] + adjetivos[j] + sustantivos[k] + extensiones[l];
          nombresDeDominio.push(nombreDeDominio);
        }
      }
    }
  }

  return nombresDeDominio;
};

const mostrarNombresDeDominio = () => {
  const todosLosNombresDeDominio = generadorDeDominios();
  let listaDeDominios = todosLosNombresDeDominio.join("<br>");
  document.getElementById("generadorDeDominios").innerHTML = listaDeDominios;
};

window.onload = () => {
  let generarBoton = document.getElementById("generar");
  generarBoton.addEventListener("click", mostrarNombresDeDominio);

  let eliminarBoton = document.getElementById("eliminar");
  eliminarBoton.addEventListener(
    "click",
    () => {
      document.getElementById("generadorDeDominios").innerHTML = "";
    },
    false
  );

  mostrarNombresDeDominio();
};
