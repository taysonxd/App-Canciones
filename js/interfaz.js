
export function mostrarAlerta(mensaje) {

	const divAlerta = document.createElement('div');
	divAlerta.classList.add('error');
	divAlerta.textContent = mensaje;

	divMensajes.appendChild(divAlerta);

	setTimeout(() => {
		divAlerta.remove();
	}, 3000)
}

export function mostrarSpinner() {

	while(divResultado.firstChild) {
		headingResultado.textContent = '';
		divResultado.removeChild(divResultado.firstChild);	
	}	

	const divSpinner = document.createElement('div');
	divSpinner.classList.add('spinner');

	divSpinner.innerHTML = `
		<div class="sk-folding-cube">
		  <div class="sk-cube1 sk-cube"></div>
		  <div class="sk-cube2 sk-cube"></div>
		  <div class="sk-cube4 sk-cube"></div>
		  <div class="sk-cube3 sk-cube"></div>
		</div>
	`;

	divResultado.appendChild(divSpinner);
}

export const formBuscar = document.querySelector('#formulario-buscar'),
			 divBuscar = document.querySelector('.buscar'),
	 	     divResultado = document.querySelector('#resultado'),
		     divMensajes = document.querySelector('#mensajes'),
		     headingResultado = document.querySelector('.letra-resultado h2');
