class Proyecto {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
  }

  getDuracion() {
    return this.tareas.reduce((acum, tarea) => acum + tarea.getDuracion(), 0);
  }

  mostrarTareas() {
    this.tareas.forEach((tarea) => tarea.mostrarTarea());

    const costoTotal = this.tareas.reduce(
      (acum, tarea) => acum + tarea.getCosto(1000),
      0
    );
    console.log(`Costo Total del Proyecto: $${costoTotal}`);
  }

  cleanTareas() {
    this.tareas = [];
  }
}

module.exports = new Proyecto();
