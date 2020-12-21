	
	const numeros = {
		numero1: {
			demand:true,
			alias: 'n1'
		},

		numero2: {
			demand:true,
			alias: 'n2'
		},
	}

	const argv = require('yargs')
		.command('suma', 'Realiza la suma',numeros)
		.command('resta', 'Realizar la resta', numeros)
		.command('multiplicar', 'Realizar la multiplicación', numeros)
		.command('dividir', 'Realizar la división', numeros)
		.help()
		.argv;

module.exports = {
	argv
}