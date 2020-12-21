	
	const argv = require('./../config/yargs.js').argv;
	const { calcular } = require('./../operaciones/calculos.js');

	let comando = argv._[0];

	switch(comando) {
		case 'suma' :
			calcular(argv.n1, argv.n2,'suma');
			break;
		case'resta':
			calcular(argv.n1, argv.n2,'resta');
			break;
		case 'multiplicar':
			calcular(argv.n1, argv.n2,'multiplicar');
			break;
		case 'dividir':
			calcular(argv.n1, argv.n2,'dividir');
			break;
		default:
			console.log('Commando no encontrado');

	}