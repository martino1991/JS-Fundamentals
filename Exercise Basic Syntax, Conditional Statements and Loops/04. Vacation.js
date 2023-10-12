// You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person. 
// The output should look like that: `Total price: {price}`.The price should be formatted to the second decimal point.
// 	                   Friday	Saturday	Sunday
// Students	            8.45	  9.80	     10.46
// Business	            10.90	  15.60	      16
// Regular	             15	        20	     22.50 

// There are also discounts based on some conditions:
// ·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// ·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
// ·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
// Note: You should reduce the prices in that EXACT order.

function solve(count, category, day) {
    let totalSum = 0;
    let price = 0;

    switch (day) {
        case "Friday":
            if (category == "Students") {
                price = 8.45;
            } else if (category == "Business") {
                price = 10.90;
            } else if (category == "Regular") {
                price = 15;
            }
            break;
        case "Saturday":
            if (category == "Students") {
                price = 9.80;
            } else if (category == "Business") {
                price = 15.60;
            } else if (category == "Regular") {
                price = 20;
            }
            break;
        case "Sunday":
            if (category == "Students") {
                price = 10.46;
            } else if (category == "Business") {
                price = 16;
            } else if (category == "Regular") {
                price = 22.50;
            }
            break;
    }
    totalSum = price * count;

    if (category == "Students" && count >= 30) {
        totalSum *= 0.85;
    } else if (category == "Business" && count >= 100) {
        totalSum -= (price * 10)
    } else if (category == "Regular" && (count >= 10 && count <= 20)) {
        totalSum *= 0.95;
    }

    console.log(`Total price: ${totalSum.toFixed(2)}`);
}
solve (110, "Business","Sunday")
