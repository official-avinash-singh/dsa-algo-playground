/*
arr1 = [1,2,3,4,5];
arr2 = [2,4,6];
result = [2,4]
Write a function that takes two arrays as input and returns a new array containing only the elements that are present in both input arrays.
*/


// Brtueforce method
arr1 = [1,2,3,4,5];
arr2 = [2,4,6];
let commonElements1 = (arr1, arr2) => {
    let commonElements = [];
    for(let i = 0; i<arr1.length; i++){
        for(let j = 0; j<arr2.length; j++){
            if(arr1[i] == arr2[j]){
                commonElements.push(arr1[i]);
            }
        }
    }
    return commonElements;
}
console.log(commonElements1(arr1, arr2));


// Better Approach
arr1 = [1,2,3,4,5];
arr2 = [2,4,6];
arr1 = [1,2,3,2,4,5];
arr2 = [2,4,2,6,1];
let commonElementsFunc2 = (arr1, arr2) => {
    let set = new Set(arr1);
    let commonElementsArr = [];
    for(let i=0; i<arr2.length; i++){
        if(set.has(arr2[i])){
            commonElementsArr.push(arr2[i]);
        }
    }
    return commonElementsArr;
}
console.log(commonElementsFunc2(arr1, arr2));
