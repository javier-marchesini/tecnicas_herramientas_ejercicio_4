
class Usuario{
    constructor(nombre){
        this.creditos = 1000;
        this.nombre = nombre;
    }

    sumarCreditos(cantidad){
        this.creditos = this.creditos + cantidad;
    }

    descontarCreditos(cantidad){
        this.creditos = this.creditos - cantidad;
    }
}

module.exports = Usuario;
