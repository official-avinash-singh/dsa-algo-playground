/*
Finding Max, in an array.
arr = [1,2,4,5] //Output 5
*/ 


let arr = [-1,2,6,7,8,3,9,-4,10,11,11];
let maxInArr = (arr) => {
    let max = -1;
    for(let i=0; i< arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
return max;
}

console.log(maxInArr(arr));