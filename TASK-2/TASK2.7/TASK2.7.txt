//2.7. Remove duplicates from an array

var array=["eye","apple","abba","guvi","geek","apple","abba"];
//anonymous function to Remove duplicates from an array
var uniqeArray=function removeDuplicates(array){
    var newArray=[...new Set(array)];
    return newArray;
}
console.log(uniqeArray(array));//[ 'eye', 'apple', 'abba', 'guvi', 'geek' ]