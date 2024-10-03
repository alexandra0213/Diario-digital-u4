import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { showMessage } from "./toastMessage.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  // Evitar que se recargue la página
  e.preventDefault();
  console.log("Formulario enviado");

  //Obtener datos del formulario a traves de sus id
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;
  // Manejo de errores
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Registro exitoso
    console.log(userCredentials);
    // Mostrar mensaje de éxito
    showMessage("Usuario registrado", "success");
  } catch (error) {
    // Registro fallido
    console.log(error);
    // Mostrar mensaje de error
    if (error.code === "auth/email-already-in-use") {
      showMessage("El correo ya está en uso", "error");
    } else {
      showMessage(error.code, "error");
    }

    if (error.code === "auth/weak-password") {
      showMessage("Contraseña vulnerable", "error");
    } else {
      showMessage(error.code, "error");
    }
  }
});