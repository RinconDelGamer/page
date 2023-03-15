$(document).ready(function() {
    // Obtener la categoría actual
    const searchParams = new URLSearchParams(window.location.search);
    const category = searchParams.get("genre");
    $('#Titulo').html("Categoría: " + category.toUpperCase());

    // Cosas del API
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.rawg.io/api/games?key=9e75af030e9f43df81610d02e2b2e59f&page_size=50', true);
    xhr.onload = function() {
    	if(this.status === 200) {
			const response = JSON.parse(this.responseText);
			let texto = '';
			let num = 0;
			response.results.every(art => {
				if(num >= 18) { console.log("false"); return false; }
				let genres = '';
				let boolean = 0;
				// Algunos juegos tienen más de 2 géneros
				art.genres.forEach(function(genero) {
					if (genero.name == category) { boolean = 1; }
					genres += genero.name + " ";
				});
				// Sólo escribir el artículo si es del género seleccionado
				if (boolean == 1) {
					num++;
					const rounded = Math.round(art.rating * 2);
					const whites = "☆☆☆☆☆☆☆☆☆☆";
					const blacks = "★★★★★★★★★★";
					const stars = blacks.slice(0, rounded) + whites.slice(rounded, 10)
					texto += `
						<article onclick="window.open()">
							<div class="article-box">
								<img src="` + art.background_image + `" alt="Imagen del juego">
								<div class="article-text">
									<h2>` + art.name + `</h2>
									<div class="flex-box">
										<h3 class="size3">` + genres + `</h3>
										<h3 class="size2">` + art.released + `</h3>
									</div>
									<h4>` + art.rating + stars + `</h4>
								</div>
							</div>
						</article>`
					;
				}
				return true;
			});
			$('#Folder').html(texto);
      	}
    };
    xhr.send();
});
