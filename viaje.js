class Viaje{

	constructor(costo, vehiculo, origen, destino){
        this.costo = costo;
        this.vehiculo = vehiculo;
        this.origen = origen;
        this.destino = destino;
        this.pasajeros = [];
        this.finalizado = false;
    }

    hayLugar(){
        return this.vehiculo.getCapacidad() > this.pasajeros.length;
    }

    agregarPasajero(pasajero){
        if (this.hayLugar() & !this.finalizado){
            this.pasajeros.push(pasajero);
            return true;
        }
        return false;
    }

    calcularCosto(){
        return this.costo / (this.pasajeros.length + 1);
    }

    conductor(){
        return this.vehiculo.getPropietario();
    }

    finalizarViaje(){
        if (!this.finalizado){
            let costo = this.calcularCosto();
            this.pasajeros.forEach(pasajero => pasajero.descontarCreditos(costo));
            this.conductor().descontarCreditos(costo);
            this.finalizado = true;
        }
    }
}

module.exports = Viaje;
