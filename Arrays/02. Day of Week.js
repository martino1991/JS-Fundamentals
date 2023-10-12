// Write a program, which receives a number and prints the corresponding name of the day of the week (in English).  
// If the number is NOT a valid day, print: "Invalid day!".

function solve(number) {
    let days =
            ["Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"]

    let result = days[number - 1];

    if (result != undefined) {
        console.log(result);
    } else {
        console.log("Invalid day!");
    }

}
solve ([3.5]) 