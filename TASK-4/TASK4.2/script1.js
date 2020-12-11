var request = new XMLHttpRequest() //object to request Http connection
//To set api connection true
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();

// function to load http connection

request.onload = function() {

    var data = JSON.parse(this.response) // object to exract json object from api
   var lat = data[0].latlng[0];
   var long = data[0].latlng[1];
   var nam = data[10].name;
   getweathergeo(lat ,long);
   getweathercityname(nam);
}
function getweathergeo(lat, long){
var request = new XMLHttpRequest() //object to request Http connection
//To set api connection true
var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=f987319a01e8fcb3e169db92403f6e7c';
request.open('GET', url, true)
request.send();

// function to load http connection

request.onload = function() {

    var data = JSON.parse(this.response) // object to exract json object from api
    console.log(data);
}
}
function getweathercityname(nam){
var request = new XMLHttpRequest() //object to request Http connection
//To set api connection true
var url1 = 'http://api.openweathermap.org/data/2.5/weather?q='+nam+'&appid=f987319a01e8fcb3e169db92403f6e7c'
request.open('GET', url1, true)
request.send();

// function to load http connection

request.onload = function() {

    var data = JSON.parse(this.response) // object to exract json object from api
    console.log(data);
}
}
