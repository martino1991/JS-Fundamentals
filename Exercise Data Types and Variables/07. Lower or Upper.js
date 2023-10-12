// Write a function that prints whether a given character is upper-case or lower-case.

function solve(letter) {
    let code = letter.charCodeAt();

    if (code <= 90) {
        console.log("upper-case");
    } else {
        console.log("lower-case");
    }
}
solve("l")