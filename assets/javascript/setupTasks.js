import { createTask, onGetTask, deleteTaks} from "./firebase.js";
import { showMessage } from "./toastMessage.js";

const taskForm = document.querySelector("#task-form");
const tasksContainer = document.querySelector("#tasks-container");

export const setupTasks = () => {
  //CREATE
  taskForm.addEventListener("submit", async (e) => {
    // Prevenir que la página se recargue
    e.preventDefault();

    // Obtener los datos del formulario
    const title = taskForm["title"].value;
    const description = taskForm["description"].value;

    // Crear una nueva tarea
    try {
      await createTask(title, description);
      // Mostrar mensaje de éxito
      showMessage("Tarea creada", "success");
      // Limpiar el formulario
      taskForm.reset();
    } catch (error) {
      // Mostrar mensaje de error
      showMessage(error.code, "error");
    }
  });

  // READ
  onGetTask((querySnapshot) => {
    let tasksHtml = "";

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      tasksHtml += `
      <article class="task-container border border-2 rounded-2 p-3 my-3">
        <header class="d-flex justify-content-between ">
          <h4>${data.title}</h4>
          <div>
            <button class="btn btn-danger btn-eliminar bi bi-trash2 " data-id="${doc.id}">Eliminar</button>
          </div>
        </header>
        <hr />
        <p>${data.description}</p>
      </article>
      `;
    });

    // Mostrar las tareas en el DOM
    tasksContainer.innerHTML = tasksHtml;
      //UPDATE

    //DELETE
    //obtenemos el btn eliminar
    const btnsEliminar = document.querySelectorAll(".btn-eliminar");
      
    btnsEliminar.forEach((btn) => {

      btn.addEventListener("click", ({ target: { dataset } }) => {
        deleteTaks(dataset.id);
        showMessage("Tarea Eliminada", "succes");
      });
    }); 
  });
};
