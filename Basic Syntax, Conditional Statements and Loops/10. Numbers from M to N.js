// Write a function that receives a number M and a number N (M will always be bigger than N). Print all numbers from 
// M to N.
function solve(maxNumber, minNumber) {
    for (let a = maxNumber; a >= minNumber; a--) {
        console.log(a);
    }
}

solve(6 , 2)