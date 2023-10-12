// Write a function, which prints common elements in two string arrays. Print all matches on separate lines. Compare
// the first array with the second array.

function solve(arr1, arr2) {

    for (let el of arr1) //el (element) vzimame el ot masiva 1
        if (arr2.includes(el)) {
            console.log(el);
        }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])