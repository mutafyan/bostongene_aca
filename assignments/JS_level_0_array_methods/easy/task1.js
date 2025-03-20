/**
 * Return the array of products, where the price is greater than 600
 */
import products from "../products.js";

function getPriceGreaterThan(products, minPrice) {
    return products.filter((product)=>product.getPrice() > minPrice);
}

export const run = () => {
    console.log("Get product with price greater than", 600);
    console.log(getPriceGreaterThan(products, 600));
}

