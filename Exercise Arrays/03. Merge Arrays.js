// Write a function, which receives two string arrays and merges them into a third array. 
// • If the index of the element is even, add into the third array the sum of both elements at that index.
// • If the index of the element is odd, add the concatenation of both elements at that index
// Input
// As input, you will receive two string arrays (with equal length).
// Output
// As output, you should print the resulting third array, each element separated by " - ".

function solve(arr1, arr2) {
    let newArr = [];

    let num1 = 0
    let num2 = 0

    for (let i = 0; i < arr1.length; i++) {
        num1 = arr1[i];
        num2 = arr2[i];

        if (i % 2 == 0) {
            let sum = Number(num1) + Number(num2);
            newArr.push(sum);
        } else {
            num1 = String(num1)
            num2 = String(num2)
            newArr.push(num1 + num2)
        }
    }

    console.log(newArr.join(" - "));
}

solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])