// Write a function that calculates and print the value of a number raised to a given power:

function solve (n , exponent) {
    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result *= n;
    }

    console.log(result);
}

solve (2 , 8);
solve(3 , 4);