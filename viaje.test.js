const Usuario = require('./usuario.js');
const Vehiculo = require('./vehiculo.js');
const Viaje = require('./viaje.js');


let origen,destino,propietario,vehiculo = null;
//Para generar nombres aleatoreamente.
const nombres = ["Fabian", "Juan", "Pedro", "Adrian", "Marcelo", "Agustin", "Pablo"];

beforeEach(() => {

	origen = "La Plata";
	destino = "Ensenada";
	propietario = new Usuario("Juan");
	vehiculo = new Vehiculo(4,"Chevrolet Onix", propietario);

});

test('Constructor', () => {

	let viaje = new Viaje(100,vehiculo,origen,destino);
	expect(viaje.costo).toBe(100);
	expect(viaje.pasajeros.length).toBe(0);
	expect(viaje.finalizado).toBeFalsy();
	expect(viaje.origen == origen).toBeTruthy();
	expect(viaje.destino == destino).toBeTruthy();
	expect(viaje.vehiculo  instanceof Vehiculo).toBeTruthy()

});


test('Se verifica que haya lugar disponible al crear un viaje nuevo', () => {
	let viaje = new Viaje(1000,vehiculo,origen,destino);
	expect(viaje.hayLugar()).toBeTruthy();
});


test('Test conductor del vehiculo sea el propietario', () => {

	let propietario = new Usuario("Javier");
	let vehiculo = new Vehiculo(4,"Chevrolet Cruze", propietario);
	let viaje = new Viaje(1000,vehiculo,origen,destino);
	expect(viaje.conductor() != undefined).toBeTruthy();
	expect(viaje.conductor() instanceof Usuario).toBeTruthy();
	expect(viaje.conductor()).toBe(propietario);

});

test('Calcular costo sin pasajeros, solo conductor', () => {

	let viaje = new Viaje(1000,vehiculo,origen,destino);
	expect(viaje.calcularCosto()).toBe(1000);

});




describe('Testeamos un viaje completo', () => {
	let viaje = null;
	let vehiculo = null;
	let propietario = null;

	beforeEach(() => {
		//Creamos un viaje con tl total completo de pasajeros
		vehiculo = new Vehiculo(4,"Chevrolet Cruze", propietario);
		viaje = new Viaje(1000,vehiculo,origen,destino);
		propietario = new Usuario("Juan");
		for (let index = 0; index < vehiculo.capacidad; index++) {
			viaje.agregarPasajero(new Usuario(nombres[Math.floor(Math.random() * nombres.length)]));
		}
	})

	test('Verficamos que no permita agregar un pasajero si está completo ', () => {
		let agregado = viaje.agregarPasajero(new Usuario(nombres[Math.floor(Math.random() * nombres.length)]));
		expect(agregado).toBeFalsy();
		expect(viaje.calcularCosto()).toBe(200);//Costo con un pasajero

	});

	test('Testeamos finalizar viaje', () => {

		viaje.finalizarViaje();
		expect(viaje.finalizado).toBeTruthy();
		expect(viaje.conductor().creditos).toBe(800); //Verificamos creditos del conductor

		viaje.pasajeros.forEach(p => {
			expect(p.creditos).toBe(800); //Verificamos creditos de los pasajeros
		});

	});
});



