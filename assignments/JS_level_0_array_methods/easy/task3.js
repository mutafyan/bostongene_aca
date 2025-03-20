/**
 * Map over the array and add random ids to each product
 */

import products from "../products.js";

function addRandomId(products) {
    products.forEach(product => {
        product.id = Math.floor(Math.random() * Math.random() * Math.random() * 10000); 
        // math.random generates a random number between 1 and 0,
        // but there is a chance of two random numbers being equal, so we will try to
        // minimize the risk of having duplicate ids by multiplying multiple randoms
    });
    return products;
}

export const run = () => {
    console.log("This will add random id's to the products list.")
    console.log(addRandomId(products));
}