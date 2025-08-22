/* 
To find the duplicate value in an Array
arr1 = [1,2,4,5,8,9,5,0]
arr2 = [1,3,4,5,6,7,7,4]
*/

let arr1 = [1,2,4,5,8,9,5,0]
let arr2 = [1,3,4,5,6,7,7,4];

// Bruteforce Way
let duplicateValArr = (arr1, arr2) =>{
    let duplicateArray = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]==arr2[j]){
                duplicateArray.push(arr1[i])
            }else return false;
        }
    }
    return duplicateArray;
}
console.log(duplicateValArr(arr1, arr2));

// Using Set
let duplicateValArr = (arr1, arr2) =>{
   let duplicateEle = [];
   let set = new Set(arr1);
   for(let i=0; i<arr2.length; i++){
       if(set.has(arr2[i])){
           duplicateEle.push(arr2[i]);
       }
   }
   return duplicateEle;
}
console.log(duplicateValArr(arr1, arr2));

