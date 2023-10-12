// Write a program, which receives a number n and an array of elements. Your task is to create a new array with n numbers from the original array, 
// reverse it and print its elements on a single line, space-separated.

function solve (n, nums) {
    let array = [];

    for (let i = n -1 ; i >= 0 ; i--) {
        array.push(nums[i]);
    }
    
    console.log(array.join(" "));

}
solve (3, [10, 20, 30, 40, 50])