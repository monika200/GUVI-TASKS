//2.4. Return all the prime numbers in an array
var array=[1,2,3,4,5,6,7,8,9]
//anonymous function to Return all the prime numbers from an array
var primeArray=function prime(array){
    var newArray=[];
    for(var n in array){
    for(var i=2;i<array[n];i++){
        var c=1;
        if(array[n]%i===0){c=0;break}
        else c=1;
    }
    if(c===1)newArray.push(array[n]);
    else if(array[n]===2)newArray.push(array[n]);
    }
    return newArray;
}
console.log(primeArray(array));
