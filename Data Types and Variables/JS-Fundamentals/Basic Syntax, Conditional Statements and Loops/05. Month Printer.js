// Write a program, that takes an integer as a parameter and prints the corresponding month. If the number is more 
// than 12 or less than 1 print "Error!"
// Input
// You will receive a single number.
// Output
// If the number is within the boundaries print the corresponding month, otherwise print "Error!"

function solve(monthNumber) {
    if (monthNumber == "1") {
        console.log("January");
    } else if (monthNumber == "2") {
        console.log("February");
    } else if (monthNumber == "3") {
        console.log("March");
    } else if (monthNumber == "4") {
        console.log("April");
    } else if (monthNumber == "5") {
        console.log("May");
    } else if (monthNumber == "6") {
        console.log("June");
    } else if (monthNumber == "7") {
        console.log("July");
    } else if (monthNumber == "8") {
        console.log("August");
    } else if (monthNumber == "9") {
        console.log("September");
    } else if (monthNumber == "10") {
        console.log("October");
    } else if (monthNumber == "11") {
        console.log("November");
    } else if (monthNumber == "12") {
        console.log("December");
    } else {
        console.log("Error!");
    }
}
solve (2)
solve (5)
solve (7)
solve (13)
