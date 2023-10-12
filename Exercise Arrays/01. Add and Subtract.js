// Write a function, which changes the value of odd and even numbers in an array of numbers. 
// • If the number is even - add to its value its index position
// • If the number is odd - subtract to its value its index position
// Output
// On the first line print the newly modified array, on the second line print the sum of numbers from the original
// array, on the third line print the sum of numbers from the modified array.

function solve(arr) {
    let originalSum = 0;
    let newSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        originalSum += num

        if (num % 2 == 0) {
            num += i;
            newSum += num;
            arr[i] = num
        } else if (num % 2 !== 0) {
            num -= i;
            newSum += num;
            arr[i] = num

        }
    }
    console.log(arr);
    console.log(originalSum);
    console.log(newSum);
}

solve ([5, 15, 23, 56, 35])