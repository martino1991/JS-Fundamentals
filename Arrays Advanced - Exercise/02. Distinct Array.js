// You will be given an array of integer numbers on the first line of the input.
// Remove all repeating elements from the array. 
// Print the result elements separated by a single space.

function distinctArray(arr) {
    let uniqueNumber = [];

    for (let num of arr) {
        if (!uniqueNumber.includes(num)) {
            uniqueNumber.push(num);
        }
    }
    console.log(uniqueNumber.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);