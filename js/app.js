import * as UI from './interfaz.js';
import API from './api.js';

let artista,
	cancion;
	
UI.formBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
	e.preventDefault();

	artista = document.querySelector('#artista').value;
	cancion = document.querySelector('#cancion').value;

	if(artista === '' || cancion === '') {
		UI.mostrarAlerta('Todos los campos son obligatorios');
		return;
	}
	
	const buscadorAPI = new API(artista, cancion);
	
	buscadorAPI.consultarAPI();
}