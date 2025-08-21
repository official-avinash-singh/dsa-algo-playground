/*
Swapping numbers without using any extra variable
a = 2 // a = 3
b = 3  // b = 2
*/ 

function swap(a,b){
    a = a + b;
    b = a - b;
    a = a - b;

    console.log(`swapped value ${a}, ${b}`);
}

console.log(swap(2,3));