async function main() {
    var search_term = document.getElementById("search-box").value;

    var raw_data = await fetch(`https://images-api.nasa.gov/search?q=${search_term}&media_type=image`); 
    var data = await raw_data.json();
    var html_tags = "";
    if(data.collection.items.length <= 0) {
        html_tags += "<h1>ERROR 404</h1>";
    }
    for(var i=0;i<data.collection.items.length;i++) {
        console.log(data);
        html_tags += `<br><img src='${data.collection.items[i].links[0].href}'><br><h2>${data.collection.items[i].data[0].date_created}, ${data.collection.items[i].data[0].title}</h2><h3>${data.collection.items[i].data[0].description.slice(0, 100)}</h3><br><br>`
    }
    document.getElementById("data").innerHTML = html_tags;
}