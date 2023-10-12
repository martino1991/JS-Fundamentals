// Write a function that converts British pounds to dollars formatted to the 3rd decimal point. 

function solve(pound) {
    let poundInDol = pound * 1.31;

    console.log(poundInDol.toFixed(3));
}
solve (80)