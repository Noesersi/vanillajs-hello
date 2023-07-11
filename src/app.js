/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let sujeto = [
    "El gato",
    "El vecino de arriba",
    "Mi tia la coja",
    "La tortuga"
  ];
  let accion = [
    "se ha comido",
    "ha escupido en",
    "me ha robado",
    "ha explotado encima de"
  ];
  let posession = [
    "mis llaves",
    "mi móvil",
    "mis deberes",
    "mi coche",
    "mi ordenador"
  ];
  let donde = [
    "en la calle",
    "en el parque",
    "en el consejo de ministros",
    "en la farmacia"
  ];

  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let posessionIndex = Math.floor(Math.random() * posession.length);
  let dondeIndex = Math.floor(Math.random() * donde.length);

  return (
    sujeto[sujetoIndex] +
    " " +
    accion[accionIndex] +
    " " +
    posession[posessionIndex] +
    " " +
    donde[dondeIndex]
  );
};
