// Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.
// Input
// You will receive a number – n. This number shows how many odd numbers you should print.
// Output
// Print the next n odd numbers, starting from 1, separated by newlines.
// On the last line, print the sum of these numbers in the following format: `Sum: {total sum}`
// Constraints
// • n will be in the interval [1…100]

function solve(n) {
    let sum = 0
    let cycle = 0;

    for (let a = 1; a <= 100; a += 2) {
        if (cycle < n) {
            sum += a;
            console.log(a);
            cycle += 1
        }
    }

    console.log(`Sum: ${sum}`);
}
solve(5)