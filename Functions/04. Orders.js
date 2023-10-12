// Write a function that calculates the total price of an order and prints it on the console. The function should receive 
// one of the following products: coffee, coke, water, snacks; and a quantity of the product. The prices for a single 
// piece of each product are: 
// • coffee - 1.50
// • water - 1.00
// • coke - 1.40
// • snacks - 2.00
// // Print the result formatted to the second decimal place

function order(product, count) {
    let products = {
        "coffee": 1.50 * count,
        "water": 1.00 * count,
        "coke": 1.40 * count,
        "snacks": 2.00 * count
    };

    let rezult = products[product];
    console.log(rezult.toFixed(2))
}
order ("water", 5 );
order("coffee", 2);
order("snacks" , 10);