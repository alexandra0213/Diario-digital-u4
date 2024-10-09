import { setupTasks } from "./setupTasks.js";

const LoggedIn = document.querySelectorAll(".logged-in");
const LoggedOut = document.querySelectorAll(".logged-out");
const mainContainer = document.querySelector("#main-container");
const saludo = document.querySelector("#saludo");

export const checkLogin = (user) => {
  // Modificamos el nav dependiendo si el usuario está logueado o no
  if (user) {
    LoggedIn.forEach((element) => (element.style.display = "block"));
    LoggedOut.forEach((element) => (element.style.display = "none"));
    // Mostramos el main container
    mainContainer.style.display = "block";
    saludo.textContent = `Bienvenidx ${user.email}`;

    // Cargamos las tareas
    setupTasks();
  } else {
    LoggedOut.forEach((element) => (element.style.display = "block"));
    LoggedIn.forEach((element) => (element.style.display = "none"));
    // Ocultamos el main container
    mainContainer.style.display = "none";
    saludo.textContent = "";
  }
};