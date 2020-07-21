class Vehiculo{
    constructor(capacidad, nombre, propietario){
        this.capacidad = capacidad;
        this.nombre = nombre;
        this.propietario = propietario;
    }

    getCapacidad(){
        return this.capacidad;
    }

    getPropietario(){
        return this.propietario;
    }
}

module.exports = Vehiculo;