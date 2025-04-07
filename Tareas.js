const {
  ComplejidadMinima,
  ComplejidadMedia,
  ComplejidadMaxima,
} = require ("./Complejidad");


class Tarea {
  constructor(codigo, duracion, complejidad = new ComplejidadMinima()) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.complejidad = complejidad;
  }

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }

  getCosto(valorBase) {
    return this.complejidad.calcularCosto(this.duracion, valorBase);
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - Costo: $${this.getCosto(1000)}`);
  }
}

class TareaCompuesta {
  constructor(codigo, duracion, tareas = [], complejidad = new ComplejidadMinima()) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tareas = tareas;
    this.complejidad = complejidad;
  }

  getDuracion() {
    const duracionSubtareas = this.tareas.reduce(
      (acum, tarea) => acum + tarea.getDuracion(),
      0
    );
    return this.duracion + duracionSubtareas;
  }

  getCodigo() {
    return this.codigo;
  }

  getCosto(valorBase) {
    let costoTareas = this.tareas.reduce(
      (acum, tarea) => acum + tarea.getCosto(valorBase),
      0
    );

    let costoPropio = this.complejidad.calcularCosto(this.duracion, valorBase);

    // overhead si hay más de 3 subtareas directas
    if (this.tareas.length > 3) {
      const overhead = (costoTareas + costoPropio) * 0.04;
      return costoTareas + costoPropio + overhead;
  }

    return costoTareas + costoPropio;
  }


  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.getDuracion()} - Costo: $${this.getCosto(1000)}`);
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }
}

module.exports = { Tarea, TareaCompuesta };
