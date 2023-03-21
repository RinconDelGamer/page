$(document).ready(function() {
    const searchParams = new URLSearchParams(window.location.search);
    const search = searchParams.get("search");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.rawg.io/api/games?key=9e75af030e9f43df81610d02e2b2e59f&page_size=15&search='+search, true);
    xhr.onload = function() {
    	if(this.status === 200) {
			const response = JSON.parse(this.responseText);
			let texto = '';
			let num = 0;
			response.results.every(art => {
				art.genres.forEach(function() {
				});
				num++;
				const rounded = Math.round(art.rating * 2);
				const whites = "☆☆☆☆☆☆☆☆☆☆";
				const blacks = "★★★★★★★★★★";
				const stars = blacks.slice(0, rounded) + whites.slice(rounded, 10)
				texto += `
					<article onclick="window.open('article.html?id=` + art.id + `', '_self')">
						<div class="article-box">
							<img src="` + art.background_image + `" alt="Imagen del juego">
							<div class="article-text">
								<h2>` + art.name + `</h2>
								<div class="flex-box">
									<h3 class="size3">` + art.genre + `</h3>
									<h3 class="size2">` + art.released + `</h3>
								</div>
								<h4>` + art.rating + stars + `</h4>
							</div>
						</div>
					</article>`
				;
			    return true;
		    });
    	    $('#Folder').html(texto);    
        }
    };
    xhr.send();
});