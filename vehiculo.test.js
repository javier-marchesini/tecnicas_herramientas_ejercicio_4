const Vehiculo = require('./vehiculo.js');
const Usuario = require('./usuario.js');

let propietario = null;

beforeEach(()=>{
	propietario = new Usuario("Juan");
})

test('Constructor', () => {

	let vehiculo = new Vehiculo(4,"Chevrolet Onix", propietario);
	expect(vehiculo.capacidad).toBe(4);
	expect(vehiculo.propietario instanceof Usuario).toBeTruthy();
	expect(vehiculo.propietario == propietario).toBeTruthy();

});

test('Test de los getters', () => {

	let vehiculo = new Vehiculo(6,"Chevrolet Onix", propietario);
	expect(vehiculo.getCapacidad()).toBe(6);
	expect(vehiculo.getPropietario() == propietario).toBeTruthy();

});
