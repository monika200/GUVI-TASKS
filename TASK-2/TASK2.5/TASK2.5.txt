//2.5 Return all the palindromes in an array

var array=["eye","apple","abba","guvi"];
//anonymous function to filter palindrome
var palindromeArray=function palindrome(array){
    var newArray=array.filter(str=>{
        var reverseStr=str.split("").reverse().join("");
        if(str===reverseStr)return str});
    return newArray}
console.log(palindromeArray(array))//[ 'eye', 'abba' ]