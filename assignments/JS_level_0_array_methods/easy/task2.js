/**Return the first product where the producer is 'Զիվա ՍՊԸ' and the price is 200 */
import products from "../products.js";

function getProduct(products, producer, price) {
    return products.find((product) => product.producer === producer && product.getPrice() === price);
}

export const run = () => {
    console.log("Return the first product where the producer is 'Զիվա ՍՊԸ' and the price is 200");
    console.log(getProduct(products, 'Զիվա ՍՊԸ', 200));
}