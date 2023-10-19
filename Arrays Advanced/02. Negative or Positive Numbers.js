// Write a function that processes the elements in an array one by one and produces a new array. 
//Prepend each negative element at the front of the array (as the first element) and append each positive (or 0) element at the end of the array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console, each element on a new line.


function negativeOrPositive(arr) {
    let result = [];

    for (let element of arr) {
        let num = Number(element);

        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num)
        }
    }

    for (let num of result) {
        console.log(num);
    }

}
negativeOrPositive (['7', '-2', '8', '9']);