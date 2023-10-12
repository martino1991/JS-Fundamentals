
// You will receive three integer numbers. 
// Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function sum() and the third integer.

function addAndSubtract(num1, num2, num3) {

    let rezult1 = add(num1, num2);
    let rezult12 = subtract(rezult1, num3);

    console.log(rezult12);

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }
}
addAndSubtract(23, 6, 10)