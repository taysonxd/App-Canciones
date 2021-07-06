import * as UI from './interfaz.js';
import {
	xml2json,
	parseXml
} from './xml2json.js';

class API {

	constructor(artista, cancion) {
		this.artista = artista;
		this.cancion = cancion;
	}

	consultarAPI() {
		
		const lyricsUrl = `http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${ this.artista }&song=${ this.cancion }`;
		const url = `https://api.allorigins.win/get?url=${ encodeURIComponent(lyricsUrl) }`;

		UI.mostrarSpinner();

		fetch(url)
			.then(respuesta => respuesta.json())
			.then(resultado => {

				document.querySelector('.spinner').remove();

				const xmlParsed = parseXml(resultado.contents);
				const json = xml2json(xmlParsed, "");
				
				const { LyricId, LyricArtist, Lyric, LyricCovertArtUrl, LyricSong } = JSON.parse(json).GetLyricResult;
				
				if(Number(LyricId)){

					UI.headingResultado.textContent = 'Resultado';

					UI.divResultado.innerHTML = `
						<div class="card">
							<div class="card-body text-center">
								<h3 class="card-title">
									${ LyricArtist }
								</h3>
								<p class="card-text">
									${ LyricSong }
								</p>
								<p class="lyrics py-0">
									${ Lyric }
								</p>
							</div>
						</div>
					`;
					/*UI.divResultado.innerHTML = `
						<div class="card">
							<img src="${ LyricCovertArtUrl }" class="card-img" style="height: 15rem !important;">
							<div class="card-img-overlay text-white align-items-end">
								<h3>
									${ LyricArtist }
								</h3>
								<p class="card-text">
									${ LyricSong }
								</p>
							</div>
							<div class="card-body text-center">
								<p class="lyrics py-0">
									${ Lyric }
								</p>
							</div>
						</div>
					`;*/
				} else {
					UI.mostrarAlerta('La canción no existe, prueba con otra búsqueda');
				}
			})
			.catch(error => console.log(error));
	}
}

export default API