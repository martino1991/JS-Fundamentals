// Write a function, which will be given a single number. Your task is to find the sum of its digits.

function solve(num) {
    let numAsString = String(num);
    let sum = 0

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    console.log(sum);
}

solve (245678)