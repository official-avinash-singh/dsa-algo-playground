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
// Brtueforce method
arr1 = [1,2,3,4,5];
arr2 = [2,4,6];
let commonElements2 = (arr1, arr2) => {
    

}

console.log(commonElements2(arr1, arr2));
