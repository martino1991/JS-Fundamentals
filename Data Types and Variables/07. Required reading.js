// Write a function to help Ivan calculate how many hours a day he has to spend reading the necessary literature from the list given for the summer vacation.
// As input, you will receive 3 parameters: 
// •	Number of pages of the current book - integer [1… 1000] 
// •	Pages read in 1 hour - integer [1… 1000]
// •	The number of days for which you must read the book -  integer [1… 1000]
// As output print on the console the number of hours, that Ivan has to read each day.

function solve(pages, pageReadForOneHour, days) {
    let totalTime = pages / pageReadForOneHour;
    let hoursPerDay = totalTime / days;

    console.log(hoursPerDay);
}
solve (212 , 20 , 2)