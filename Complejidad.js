class Complejidad {
    calcularCostoBase(duracion, valorBase) {
      return duracion * valorBase;
    }
  
    calcularCostoExtra(duracion, valorBase) {
      return 0;
    }
  
    calcularCosto(duracion, valorBase) {
      return (
        this.calcularCostoBase(duracion, valorBase) +
        this.calcularCostoExtra(duracion, valorBase)
      );
    }
  }
  
  class ComplejidadMinima extends Complejidad {}
  
  class ComplejidadMedia extends Complejidad {
    calcularCostoExtra(duracion, valorBase) {
      return this.calcularCostoBase(duracion, valorBase) * 0.05;
    }
  }
  
  class ComplejidadMaxima extends Complejidad {
    calcularCostoExtra(duracion, valorBase) {
      const base = this.calcularCostoBase(duracion, valorBase);
      let extra = base * 0.07;
      if (duracion > 10) {
        extra += 1000 * (duracion - 10);
      }
      return extra;
    }
  }
  
  module.exports = {
    Complejidad,
    ComplejidadMinima,
    ComplejidadMedia,
    ComplejidadMaxima,
  };