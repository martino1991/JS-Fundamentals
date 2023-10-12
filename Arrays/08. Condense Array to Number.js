// Write a program, which receives an array of numbers, and condenses them by summing adjacent couples of elements until a single number is obtained. 
// Examples
// For example, if we have 3 elements [2, 10, 3], we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13} = {25}.

function solve(arr) {

    if (arr.length == 1) {
        console.log(arr[0]);
    } else {
        let condens = [];

        while (arr.length > 1) {
            for (let index = 0; index < arr.length - 1; index++) {
                let sum = arr[index] + arr[index + 1];
                condens.push(sum);
            }

            arr = condens;
            condens = [];
        }

        console.log(arr[0]);
    }
}

solve([5, 0, 4, 2, 1])