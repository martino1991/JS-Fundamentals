// Write a function that finds the longest sequence of equal elements in an array of numbers.
// If several longest sequences exist, print the leftmost one.
function solve(arr) {
    let sequence = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            sequence.push(arr[i]);
        }
        
    }
}
solve ([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);