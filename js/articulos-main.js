$(document).ready(function() {
    
  });

  function init(){
    /*const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.rawg.io/api/games?key=9e75af030e9f43df81610d02e2b2e59f&page_size=10", true);
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let texto = '';
            response.results.forEach(function(art) {
                const rounded = Math.round(art.rating * 2);
                const whites = "☆☆☆☆☆☆☆☆☆☆";
                const blacks = "★★★★★★★★★★";
                const stars = blacks.slice(0, rounded) + whites.slice(rounded, 10)
                //console.log(art.background_image);
                texto += `
                    <article class="masonry__brick entry format-standard animate-this fat33">
                        <div class="entry__thumb">
                            <a href="single-standard.html" class="entry__thumb-link">
                                <img id="image" src="` + art.background_image + `" alt="game_img">
                            </a>
                        </div>
                        <div class="entry__text">
                            <div class="entry__header">
                                <h2 class="entry__title"><a href="single-standard.html" id="game-name">` + art.name + `</a></h2>
                                <div class="entry__meta">
                                    <span class="entry__meta-cat" id="categories">
                                        <a href="category.html">` + art.genres[0].name + `</a><a href="category.html">` + art.genres[1].name + `</a>
                                    </span>
                                    <span class="entry__meta-date" id="release-date">
                                        <a href="single-standard.html">` + art.released + `</a>
                                    </span>
                                </div>
                            </div>
                            <div class="entry__excerpt" id="resume">

                            </div>
                        </div>
                    </article>
                    `;
            });
            //console.log(texto);
            $('#Folder').html(texto);
        }
    };
    xhr.send();*/

    //var json = $.getJSON("placeholder/res.json", function(json){
        //console.log(Object.keys(json.results).length);
        /*for (let i = 0; i < Object.keys(json.results).length; i++) {
            document.getElementById('image').innerHTML = '<img id="image" src="' + json.results[i].background_image + '" alt="">';
            document.getElementById('game-name').innerHTML = json.results[i].name;
            document.getElementById('categories').innerHTML = '<a href="category.html">' + json.results[i].genres[0].name + '</a><a href="category.html">' + json.results[0].genres[1].name + '</a>';
            document.getElementById('release-date').innerHTML = '<a href="single-standard.html">' + json.results[i].released + '</a>';
            //document.getElementById('resume').innerHTML = '<p></p>'
        }*/
        
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch("https://api.rawg.io/api/games?key=9e75af030e9f43df81610d02e2b2e59f&page_size=10", requestOptions)
            .then(function(response){
                let texto = '';
                response.results.forEach(function(art) {
                const rounded = Math.round(art.rating * 2);
                const whites = "☆☆☆☆☆☆☆☆☆☆";
                const blacks = "★★★★★★★★★★";
                const stars = blacks.slice(0, rounded) + whites.slice(rounded, 10)
                //console.log(art.background_image);
                texto += `
                    <article class="masonry__brick entry format-standard animate-this fat33">
                        <div class="entry__thumb">
                            <a href="single-standard.html" class="entry__thumb-link">
                                <img id="image" src="` + art.background_image + `" alt="game_img">
                            </a>
                        </div>
                        <div class="entry__text">
                            <div class="entry__header">
                                <h2 class="entry__title"><a href="single-standard.html" id="game-name">` + art.name + `</a></h2>
                                <div class="entry__meta">
                                    <span class="entry__meta-cat" id="categories">
                                        <a href="category.html">` + art.genres[0].name + `</a><a href="category.html">` + art.genres[1].name + `</a>
                                    </span>
                                    <span class="entry__meta-date" id="release-date">
                                        <a href="single-standard.html">` + art.released + `</a>
                                    </span>
                                </div>
                            </div>
                            <div class="entry__excerpt" id="resume">

                            </div>
                        </div>
                    </article>
                    `;
            });
            //console.log(texto);
            $('#Folder').html(texto);
                //return response.json();
            })
            .then(function(art){})
                
            .catch(error => console.log('error', error));

        //const response = JSON.parse(this.responseText);
            
    //});
  }
