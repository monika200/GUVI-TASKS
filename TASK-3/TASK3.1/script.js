var request=new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all', true)
request.send();

request.onload = function () {

    var data=JSON.parse(this.response);
    var asiacountries = data.filter((element) =>{
    return element.region==='Asia'
})
   
   console.log(asiacountries);
   asiacountries.forEach((a) => {
   console.log(a.name);
})
}


