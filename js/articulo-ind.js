$(document).ready(function() {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.rawg.io/api/games/'+id+'?key=9e75af030e9f43df81610d02e2b2e59f', true);
    xhr.onload = function() {
    	if(this.status === 200) {
			const response = JSON.parse(this.responseText);
			let texto = '';
            texto += `
                    <div class="row section-intro add-bottom">
                        <div class="column large-full">
                            <h1 class="display-1">`+ response.name_original +`</h1>

                            <div class="column large-full tab-full">
                                <p>
                                    <img src="`+ response.background_image +`" alt="">
                                </p>
                            </div>

                            <p class="lead">
                                `+ response.description +`
                            </p>
                        </div>
                    </div>`
				;
            $('#Folder').html(texto); 
        }
    };
    xhr.send();
});