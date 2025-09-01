/*
arr = [1,3,5,6,7]
Find the second largest number in the array
*/
let arr = [1,3,6,5,7,9,10,4];
let secondLargest = (arr) =>{
    let largest = arr[0];
    let secondLargestnum;
    for(let i = 1; i<arr.length; i++){
        if(arr[i]>arr[i-1]){
            largest = arr[i];
        }
    }
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>secondLargestnum && arr[i] != largest){
            secondLargestnum = arr[i];
        }
    }
    return secondLargestnum;
}
console.log(secondLargest(arr));