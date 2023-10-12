// Write a function that receives a string and a repeat count n. The function should return a new string (the old one 
//     repeated n times).

function solve(str, n) {
    let rezult = "";

    for (let i = 0; i < n; i++) {
        rezult += str;
    }
    return (rezult);
}
console.log(solve("abc", 3))
console.log(solve("String", 2))