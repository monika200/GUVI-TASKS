let card = document.getElementById("card")
var p1 = new Promise((resolve,reject) =>{
var request = new XMLHttpRequest() 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();

request.onload = function() {
     var jsondata = JSON.parse(this.response) 
     resolve(jsondata);  
}
});
p1.then((d1) =>{
    console.log(d1)
    for(let i=0;i<d1.length;i++){
        let div2 = document.createElement("div")
        div2.innerHTML = `<div class="card">
        <div class="card-head">
            <p>${d1[i].name}</p>
        </div>
        <img src="${d1[i].flag}" class="card-img-top " alt="Image">
        <div class="card-body">
            <ul>
                <li>Capital:<span id="li1">${d1[i].capital}</span></li>
                <li>Country Code:<span>${d1[i].alpha2Code,d1[i].alpha3Code}</span></li>
                <li>Region:<span>${d1[i].region}</span></li>
                <li>Lat,Long:<span>${d1[i].latlng.join(", ")}</span></li>
            </ul>
        </div>
    </div>`
        card.append(div2)
 }
    })
    .catch((err)=>{
    console.log(err);
    })