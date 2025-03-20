/** Find an element with price 7 */
import products from "../products.js";

export const run = () => {
    console.log(products.find((product)=>product.getPrice() === 7));
}