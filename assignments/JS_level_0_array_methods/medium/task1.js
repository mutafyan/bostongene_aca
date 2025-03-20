/** Return elements grouped by the producer  */
import products from "../products.js";

function groupByProducers(products) {
    const result = [];
    products.map((product)=>{
        result[product.producer] ??= [];
        result[product.producer].push(product);
    });
    return result;
}

export const run = () => {
    console.log(groupByProducers(products));
}