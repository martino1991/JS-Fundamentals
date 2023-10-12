// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive
// or negative. Try to do this WITHOUT multiplying the 3 numbers.
// Input
// The input comes as parameters named numOne, numTwo, numThree.
// Output
// • If the result is positive, print on the console -> "Positive"
// • Otherwise, print -> "Negative"

function signCheck(numOne, numTwo, numThree) {

    let positive = 0;
    let negative = 0;

    numOne >= 0 ? positive++ : negative++;
    numTwo >= 0 ? positive++ : negative++;
    numThree >= 0 ? positive++ : negative++;

     if (negative == 0) {
        console.log("Positive");
    } else if (negative == 1) {
        console.log("Negative");
    } else if (negative == 2) {
        console.log("Positive");
    } else if (negative == 3) {
        console.log("Negative");
    }
}

signCheck(-5,-12,15)