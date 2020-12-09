//2.8. Rotate an array by k times and return the rotated array

var array=[1,2,3,4,5,6,7];
//anonymous function to rotate an array
var rotatedArray=function rotate(array,k){
    var newArray=[...array],s;
    for(var i=0;i<k;i++){
        s=newArray.shift();
        newArray.push(s);
    }
    return newArray;
}
console.log(rotatedArray(array,2))//[ 3, 4, 5, 6, 7, 1, 2 ]