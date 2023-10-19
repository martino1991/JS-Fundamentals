// Write a function that manipulates an array of numbers. 
// •	Add {number}: add a number to the end of the array
// •	Remove {number}: remove all occurrences of a particular number from the array
// •	RemoveAt {index}: removes number at a given index
// •	Insert {number} {index}: inserts a number at a given index
// Note: All the indices will be valid!
// The input comes as an array of strings. The first element will be a string containing the array to manipulate. Every other command you receive will also be a string.
// The output is the manipulated array printed on the console on a single line, separated by space.

function solve(commands) {
    let arr = commands.shift().split(' ').map(Number);
    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case 'Add':
                add(firstNum);
                break;
            case 'Remove':
                remove(firstNum);
                break;
            case 'RemoveAt':
                removeAt(firstNum);
                break;
            case 'Insert':
                insert(firstNum, secondNum);
                break;
        }
    }
    function add(el) {
        arr.push(el);
    }
    function remove(num) {
        arr = arr.filter(el => el !== num);
    }
    function removeAt(index) {
        arr.splice(index, 1);
    }
    function insert(num, index) {
        arr.splice(index, 0, num);
    }
    console.log(arr.join(' '));
}

solve (['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])