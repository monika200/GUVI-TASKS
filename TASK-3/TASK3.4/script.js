var request=new XMLHttpRequest();

request.open

('GET','https://restcountries.eu/rest/v2/all', 

true)

request.send();


request.onload = function () {

    
var data=JSON.parse(this.response);
   
var totalpopulation = data.reduce((a,b) =>{
  return a+b.population;
},0)

    console.log(totalpopulation);
}