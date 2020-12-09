var request=new XMLHttpRequest();

request.open

('GET','https://restcountries.eu/rest/v2/all', 

true)

request.send();


request.onload = function () {

    
var data=JSON.parse(this.response);
   
var usd_currency = data.filter((element) =>{
 
let flag =false 
element.currencies.forEach((item) =>{
if (item.code==="USD")
flag=true;
})

if(flag==true)
return true;
else
return false;

})
console.log(usd_currency);
}