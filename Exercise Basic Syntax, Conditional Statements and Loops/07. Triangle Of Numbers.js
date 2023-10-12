// Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
// Constraints
// ·	n will be in the interval [1...20].
// Examples
// Input	Output
// 3	    1
//          2 2 
//          3 3 3		

function solve(n) {
    for (let a = 1; a <= n; a++) {
        console.log(`${a} `.repeat(a));
    }
}
solve(5)

///////////////////////////////////////////////////////////////////////////////////////////////

function solve(maxRow) {
    for (let n = 1; n <= maxRow; n++) {
        let curRow = ``;

        for (count = 1; count <= n; count++) {
            curRow += n + ``;
        }

        console.log(curRow);
    }
}
solve(2)