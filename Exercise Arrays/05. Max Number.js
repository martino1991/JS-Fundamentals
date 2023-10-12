// Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the 
// elements to its right. 
// Output
// Print all top integers on the console, separated by a single space.

function solve(arr) {
    let topNumbers = [];

    for (i = 0; i < arr.length; i++) {
        let num = arr[i];
        let isTop = true;

        for (j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];

            if (rightNum >= num) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topNumbers.push(num)
        }
    }

    console.log(topNumbers.join(" "));
}

solve ([27, 19, 42, 2, 13, 45, 48])