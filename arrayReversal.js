/**
 Array Revrsal
 input array = [1,2,4,0,5]
 output array = [5,0,4,2,1]
**/

// Method 1 - Bruteforce Method
// arr1 = [1, 2, 5, 6, 7];
arr = [1, 2, 5, 6, 7];
function reverseArray(inputArray){
    let reversedArray = [];
    let n = inputArray.length -1;
        for(let j=n; j>=0; j--){
            reverseArray.push(arr[j]);
        }
    return reversedArray;
}
console.log(reverseArray(arr));