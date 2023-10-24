// Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, 
// the third is the second biggest one, and the fourth is the second smallest one, and so on. 
// Print the elements on one row, separated by a single space.

function sorting(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let filterArr = [];

    while (sortedArr.length > 0) {
        let maxNumber = sortedArr.pop();
        let minNumber = sortedArr.shift();

        filterArr.push(maxNumber , minNumber);
    }
    console.log(filterArr.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])