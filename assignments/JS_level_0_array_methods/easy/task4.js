/** Return the array which includes only item names and counts */
import products from "../products.js";

const getNamesAndCounts = (products) => {
    return products.map((product) => ({name: product.name, count: product.count}));
}

export const run = () => {
    console.log(getNamesAndCounts(products));
}