/**
 * Create a function that determines whether a shopping order is eligible for 
 * free shipping. An order is eligible for free shipping if the total cost of 
 * items purchased exceeds $50.00
 */

const freeShipping = (purchaseObj) => {
    let totalAmount = 0;
    for(const cost of Object.values(purchaseObj)) {
        totalAmount += cost;
    }
    return totalAmount > 50;
}

console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 5.99, "Bananagrams":
    13.99 }));