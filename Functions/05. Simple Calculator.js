// Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result 
// depending on the operator. Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this 
// task using arrow functions.
// Bonus
// Solve this task without using any conditional statements (no if or switch statements or ternary operators).
// Input
// The input comes as parameters named numOne, numTwo, operator.

function simpleCalculator(a, b, operator) {
    let operation = {
        "add": (a, b) => a + b,
        "subtract": (a, b) => a - b,
        "multiply": (a, b) => a * b,
        "divide": (a, b) => a / b
    };

    let rezult = operation[operator];
    console.log(rezult(a, b));

}
simpleCalculator (5,5,'multiply');
simpleCalculator (40,8,'divide');
simpleCalculator (12,19,'add');
simpleCalculator (50,13,'subtract')