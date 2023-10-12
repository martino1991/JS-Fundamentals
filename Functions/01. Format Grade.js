// Write a function that receives a grade between 2.00 and 6.00 and prints a formatted line with grade and 
// description.
// • < 3.00 - "Fail"
// • >= 3.00 and < 3.50 - "Poor"
// • >= 3.50 and < 4.50 - "Good"
// • >= 4.50 and < 5.50 - "Very good"
// • >= 5.50 - "Excellent"

function solve(grade) {
    if (grade < 3.00) {
        console.log(`Fail (2)`);
    } else if (grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else if (grade < 6.00) {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}
solve(2.49);
solve(3.18);
solve(4.5);
solve(5.75);

/////////////////////////////////   BEZ POVTARQSHTI SE KOMANDI /////////////////////////////////////////

function solve(grade) {
    let label = "";

    if (grade < 3.00) {
        label = "Fail";
        grade = 2;
    } else {
        if (grade < 3.50) {
            label = "Poor";
        } else if (grade < 4.50) {
            label = "Good";
        } else if (grade < 5.50) {
            label = "Very good";
        } else if (grade < 6.00) {
            label = "Excellent";
        }
        grade = grade.toFixed(2)
    }

    console.log(`${label} (${grade})`);

}

solve(2.49);
solve(3.18);
solve(4.5);
solve(5.75);