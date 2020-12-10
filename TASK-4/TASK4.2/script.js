var request = new XMLHttpRequest() //object to request Http connection
//To set api connection true
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();

// function to load http connection

request.onload = function() {

    var data = JSON.parse(this.response) // object to exract json object from api
    console.log(data);
}
var request1 = new XMLHttpRequest() //object to request Http connection
//To set api connection true
request1.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Australia&appid=f987319a01e8fcb3e169db92403f6e7c', true)
request1.send();

// function to load http connection

request1.onload = function() {

    var data1 = JSON.parse(this.response) // object to exract json object from api
    console.log(data1);
}
var request2 = new XMLHttpRequest() //object to request Http connection
//To set api connection true
request2.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=33&lon=65&appid=f987319a01e8fcb3e169db92403f6e7c', true)
request2.send();

// function to load http connection

request2.onload = function() {

    var data2 = JSON.parse(this.response) // object to exract json object from api
    console.log(data2);
}
