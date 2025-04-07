const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require("./Tareas");
const {
  ComplejidadMinima,
  ComplejidadMedia,
  ComplejidadMaxima,
} = require("./Complejidad");

const t1 = new Tarea("1", 3, new ComplejidadMedia());
const t2 = new TareaCompuesta("2", 5, [
  new Tarea("2.1", 6, new ComplejidadMinima()),
  new TareaCompuesta("2.2", 8, [
    new Tarea("2.2.1", 3, new ComplejidadMaxima()),
    new Tarea("2.2.2", 4, new ComplejidadMedia()),
], new ComplejidadMedia()),
], new ComplejidadMedia());

const t3 = new TareaCompuesta("3", 7, [
  new Tarea("3.1", 6, new ComplejidadMaxima()),
  new Tarea("3.2", 3, new ComplejidadMaxima()),
], new ComplejidadMaxima());

proyecto.agregarTarea(t1);
proyecto.agregarTarea(t2);
proyecto.agregarTarea(t3);

proyecto.mostrarTareas();
console.log(`Duracion Total: ${proyecto.getDuracion()}`);
console.log(`Costo Total: $${proyecto.tareas.reduce((acum, tarea) => acum + tarea.getCosto(1000), 0)}`);
