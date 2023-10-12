// Write a function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.
// Output
// Print the resulting array elements separated by a single space.

function solve(arr, rotationCount) {

    for (let rot = 1; rot <= rotationCount; rot++) {
        let firstEl = arr.shift();
        arr.push(firstEl)
    }

    console.log(arr.join(" "));
}

solve ([51, 47, 32, 61, 21], 2)