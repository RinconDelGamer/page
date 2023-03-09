function init(){
    try {
        fetch('https://api.igdb.com/v4/games/', {
        method: 'POST',
        headers: {
            'Client-ID': 'qhf04rd5op5wr9mvdaq812wmmbo9eg',
            'Authorization': 'Bearer gb4cijdgjmowfz3g2djesx54hk37pq'
        },
        body: JSON.stringify({ "id": 78912 })
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
    } catch (error) {
        console.log("No se pudo :c");
    }
    
}