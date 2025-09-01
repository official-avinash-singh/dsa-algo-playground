/*
Find the peak of an array
arr1 = [1,3,5,8,4,0];
arr2 = [1,3,5,5,5,4,0];
Assumption 1: array goes like increasing, peak, then decreasing
Assumption 2: array can have repetative terms
*/


let arr = [1,3,5,8,4,0];
let peakOfArray = (arr) =>{
    for(let i=0; i< arr.length; i++){
        if(arr[i]>arr[i+1]){
            return `${arr[i]} is peak of the Array at index ${i}`;
        }
    }
}
console.log(peakOfArray(arr));