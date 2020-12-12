//2.6 Return median of two sorted arrays of same size

var array1=[1,2,3,4,5,6];
var array2=[4,5,7,8,8,9];
//anonymous function to find median of 2 array
var medianOfArray=function median(array1,array2){
    var newArray=[...array1,...array2],s,len=newArray.length;
    var a = newArray.sort(((x,y)=>x-y));
    s=(newArray[len/2-1]+newArray[len/2])/2
    return s;
}
console.log(medianOfArray(array1,array2))//2