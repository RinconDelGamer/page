function init(){
    try {
        fetch('https://api.igdb.com/v4/games/', {
        method: 'POST',
        headers: {
            
        },
        body: JSON.stringify({ "id": 78912 })
        })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
    } catch (error) {
        console.log("No se pudo :c");
    }
    
}