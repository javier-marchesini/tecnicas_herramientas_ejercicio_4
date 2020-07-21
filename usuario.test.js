const Usuario = require('./usuario.js');

let creditos=null;

beforeEach(() => {
	creditos=100;
});

test('Constructor', () => {

	let usuario =  new Usuario("Juan");
	expect(usuario.creditos).toBe(1000);

});

test('Descontar Créditos', () => {

	let usuario = new  Usuario("Pedro");
	usuario.descontarCreditos(creditos)
	expect(usuario.creditos).toBe(900);

});

test('Sumar Créditos', () => {

	let usuario = new  Usuario("Pedro");
	usuario.sumarCreditos(creditos)
	expect(usuario.creditos).toBe(1100);

});