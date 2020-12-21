
	let resultado;

	let calcular = (n1,n2, operacion) => {
			console.log(operacion);

				if (operacion === 'suma') {
					resultado = n1 + n2;
					console.log(resultado);

				} else if(operacion === 'resta') {
					resultado = n1 - n2;
					console.log(resultado);

				} else if(operacion === 'multiplicar') {
					resultado = n1 * n2;
					console.log(resultado);

				} else if (operacion === 'dividir') {
					resultado = n1 / n2;
					console.log(resultado);
					
				} else {
					console.log('Error');
				}
			}
	

	
module.exports = {
	calcular
}