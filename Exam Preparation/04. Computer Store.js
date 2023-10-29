// Write a program that prints you a receipt for your new computer. 
// You will receive the parts' prices (without tax) until you receive what type of customer this is - special or regular. 
// Once you receive the type of customer you should print the receipt.
// The taxes are 20% of each part's price you receive. 
// If the customer is special, he has a 10% discount on the total price with taxes.
// If a given price is not a positive number, you should print "Invalid price!" on the console and continue with the next price.
// If the total price is equal to zero, you should print "Invalid order!" on the console.
// Input
// •	You will receive numbers representing prices (without tax) until arr[index] "special" or "regular":
// Output
// •	The receipt should be in the following format: 
// "Congratulations you've just bought a new computer!
// Price without taxes: {total price without taxes}$
// Taxes: {total amount of taxes}$
// -----------
// Total price: {total price with taxes}$"
// Note: All prices should be displayed to the second digit after the decimal point! The discount is applied only on the total price. 
// Discount is only applicable to the final price!

function computerStore(arr) {
    let componentsPrice = 0;
    let totalPrice = 0;
    let taxes = 0;
    let index = 0

    while (arr[index] !== "special" && arr[index] !== "regular") {
        let piecePrice = Number(arr[index]);
        if (piecePrice <= 0) {
            console.log("Invalid price!");
            index++
            continue;
        }

        componentsPrice += piecePrice;
        taxes += piecePrice * 0.20;
        totalPrice = componentsPrice + taxes;

        index++;
    }
    if (totalPrice <= 0) {
        console.log("Invalid order!");
        return;
    }

    let specialCustomerDiscount = totalPrice * 0.10;

    if (arr[index] == "special") {
        totalPrice -= specialCustomerDiscount;
    }

    console.log(`Congratulations you've just bought a new computer!`)
    console.log(`Price without taxes: ${componentsPrice.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    
    
    