// Write a function that receives an array of integers and an array of string commands and executes them over the array. 
// The commands are as follows:
// •	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
// •	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
// •	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
// •	remove <index> – removes the element at the specified index.
// •	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
// o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
// •	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
// o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
// •	print – stop receiving more commands and print the last state of the array in the following format:
//          `[ {element1}, {element2}, …elementN} ]`
//   Note: The elements in the array must be joined by comma and space (, ).

function arrayManipulator(nums, commands) {

    for (let command of commands) {
        let tokens = command.split(" ");
        let action = tokens[0];

        if (action == "add") {
            let index = Number(tokens[1]);
            let num = Number(tokens[2]);

            nums.splice(index, 0, num);
        } else if (action == "addMany") {
            let index = Number(tokens[1]);
            let element = tokens.slice(2,).map(Number);

            for (let num of element) {
                nums.splice(index, 0, num);
                index++
            }
        } else if (action == "contains") {
            let num = Number(tokens[1]);
            let index = nums.indexOf(num)

            console.log(index);
        } else if (action == "remove") {
            let index = Number(tokens[1])
            nums.splice(index, 1);
        } else if (action == "shift") {
            let rotations = Number(tokens[1]);

            for (let rotation = 1; rotation <= rotations; rotation++) {
                let firstNum = nums.shift();
                nums.push(firstNum);
            }
        } else if (action == "sumPairs") {
            let pairedArr = [];
            for (let i = 0; i < nums.length; i += 2) {

                if (i + 1 < nums.length) {
                    pairedArr.push(nums[i] + nums[i + 1]);
                } else {
                    pairedArr.push(nums[i]);
                }
            }

            nums = pairedArr;

        } else if (action == "print") {
            console.log(`[ ${nums.join(", ")} ]`);
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print'])