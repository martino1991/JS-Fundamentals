// Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.

function solve(arr) {
    let evenResult = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenResult += Number(arr[i]);
        }
    }

    console.log(evenResult);
}
solve (['1','2','3','4','5','6'])