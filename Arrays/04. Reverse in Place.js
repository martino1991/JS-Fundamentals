// Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array. 
// Print the resulting elements on a single line, space-separated. 

function solve(str) {
    for (let i = 0; i < str.length / 2; i++) {
        let j = str.length - 1 - i;

        let temp = str[i];
        str[i] = str[j]
        str[j] = temp;

    }

    console.log(str.join(" "));
}
solve (['a', 'b', 'c', 'd', 'e'])