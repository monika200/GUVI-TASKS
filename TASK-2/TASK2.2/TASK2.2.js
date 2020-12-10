//2.2. Convert all the strings to title caps in a string array
var array=["arun","bala","chintan","dheeraj"];
//anonymous function to Convert all the strings to title caps
var titleCaps=function convertTitltCaps(word){
    var arrayString=[];
    for(var i=0;i<word.length;i++){
   var string = word[i][0].toUpperCase();
   for(var j=1;j<word[i].length;j++){
       string+=word[i][j].toLowerCase();
    }
    arrayString.push(string);
    }
   return arrayString;
    
};
console.log(titleCaps(array))//[ 'Arun', 'Bala', 'Chintan', 'Dheeraj' ]