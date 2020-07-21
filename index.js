/*import  Usuario  from './usuario.js';
import  Vehiculo  from './vehiculo.js';
import  Viaje  from './viaje.js';
*/

const Usuario = require('./usuario.js');
const Vehiculo = require('./vehiculo.js');
const Viaje = require('./viaje.js');

let juan = new Usuario("Juan");
let pedro = new Usuario("Pedro");
let fordKa = new Vehiculo(4, "Ford Ka", juan);
debugger;
let viajeLPBuenosAires = new Viaje(350, fordKa, "La Plata", "Buenos Aires");
viajeLPBuenosAires.agregarPasajero(pedro);
viajeLPBuenosAires.finalizarViaje();
viajeLPBuenosAires.finalizarViaje();

console.log(viajeLPBuenosAires);
