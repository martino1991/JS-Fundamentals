// You will receive 3 numbers. Your task is to find their sum and print result to the console in the following format:
// `{sum} - {type of the number (Integer or Float)}`

function solve(a, b, c) {
    let sum = a + b + c;
    let sumAsString = String(sum);

    let isFloat = false;

    for (let i = 0; i < sumAsString.length ; i++) {
        if (sumAsString[i] == ".") {
            isFloat = true;
        }
    }
    
    console.log(`${sum} - ${isFloat ? "Float" : "Integer"}`);
}
solve(9, 100, 1.1);
solve(100, 200, 303)