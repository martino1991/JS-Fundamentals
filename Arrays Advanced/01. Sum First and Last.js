// Write a function that calculates and prints the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console.

function firstAndLast(arr) {
    let firstNumber = Number(arr.shift());
    let lastNumber = Number(arr.pop())

    let sum = firstNumber + lastNumber;

    console.log(sum);
}
firstAndLast(['20', '30', '40'])