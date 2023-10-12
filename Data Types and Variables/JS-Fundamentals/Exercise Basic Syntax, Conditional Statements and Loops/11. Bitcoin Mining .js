// Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined during your shift at the mine. 
// Your shift consists of a certain number of days where you mine an amount of gold in grams. 
// Your program will receive an array with the amount of gold you mined each day, where the first day of your shift is the first index of the array. 
// Also, someone was stealing every third day from the start of your shift 30% from the mined gold for this day. 
// You need to check, which day you have enough money to buy your first bitcoin. For the different exchanges use these prices:

// 1 Bitcoin	 11949.16 lv.
// 1 g of gold	  67.51 lv.

// Input
// You will receive an array of numbers, representing your shift at the mine.
// Output
// Print on the console these lines in the following formats:
// ·	First-line prints the total amount of bought bitcoins:
//  `Bought bitcoins: {count}`
// ·	Second-line prints which day you bought your first bitcoin: 
//  `Day of the first purchased bitcoin: {day}`
// In case you did not purchase any bitcoins, do not print the second line.
// ·	Third-line prints the amount of money that’s left after the bitcoin purchases rounded by the second digit after the decimal point:
//   `Left money: {money} lv.`
// Constraints
// ·	The input array may contain up to 1,000 elements
// ·	The numbers in the array are in the range [0.01..5,000.00] inclusive
// ·	Allowed time/memory: 100ms/16MB.


function solve(input) {
    let day = 0;
    let firstday = 0;

    let bitcoin = 0;
    let goldCount = 0;
    let money = 0;

    let index = 0;
    let goldPrice = 67.51;

    for (let miningDay = 1; miningDay <= input.length; miningDay++) {
        goldCount = Number(input[index]);
        index++
        day++;
        if (day % 3 == 0) {
            goldCount *= 0.70;
        }
        money += goldCount * goldPrice;

        while (money >= 11949.16) {
            money -= 11949.16;
            bitcoin++;
            if (bitcoin == 1) {
                firstday = day;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);

    if (bitcoin != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstday}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}
solve(["3124.15", "504.212", "2511.124"])
