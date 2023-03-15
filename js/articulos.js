$(document).ready(function() {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/RinconDelGamer/page/main/placeholder/res.json', true);
    xhr.onload = function() {
      if(this.status === 200) {
          const response = JSON.parse(this.responseText);
          let texto = '';
          response.results.forEach(function(art) {
              const rounded = Math.round(art.rating * 2);
              const whites = "☆☆☆☆☆☆☆☆☆☆";
              const blacks = "★★★★★★★★★★";
              const stars = blacks.slice(0, rounded) + whites.slice(rounded, 10)
              console.log(stars);
              texto += `<article class="fat33">
                          <img src="` + art.background_image + `" alt="Imagen del juego">
                          <div class="article-text">
                            <h2>` + art.name + `</h2>
                            <div class="flex-box">
                              <h3>` + art.genres[0].name + `, ` + art.genres[1].name + `</h3>
                              <h3>` + art.released + `</h3>
                            </div>
                            <h4>` + art.rating + stars + `</h4>
                          </div>
                        </article>`;
          });
          $('#Folder').html(texto);
      }
    };
    xhr.send();
  });
