// Write a function, which as input will receive a number.
// Check and print if it is amazing or not into the following format: 
// 	"{number} Amazing? {True or False}"
// An amazing number includes the digit 9 the sum of its digits. 
// Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)
 
function solve(num) {
    let numAsString = String(num);
    let sum = 0;

    let isAmazing = true;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i])
    }

    let sumAsString = String(sum);

    for (let g = 0; g < sumAsString.length; g++) {
        if (sumAsString[g] == "9") {
            isAmazing = false;
        }
    }
    console.log(`${num} Amazing? ${isAmazing ? "False" : "True"} `);
}
//solve (1233);
solve(991);