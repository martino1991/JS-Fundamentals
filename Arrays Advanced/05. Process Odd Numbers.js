// You are given an array of numbers. Write a function that prints the elements at odd positions from the array, doubled and in reverse order.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.

function processOddIndex(arr) {
    let oddIndex = arr.filter((x, i) => i % 2 != 0);

    let doubled = oddIndex.map(x => x * 2);

    let reversed = doubled.reverse();

    let result = reversed.join(" ");

    console.log(result);

} 
processOddIndex ([10, 15, 20, 25])
/////////////////////////////////////////////////////     КРАТКА ВЕРСИЯ    //////////////////////////////////////////////////////////////////////////

function process(arr) {
    console.log(
        arr
            .filter((x, i) => i % 2 != 0)
            .map(x => x * 2)
            .reverse()
            .join(" ")
    );
}
process ([10, 15, 20, 25])