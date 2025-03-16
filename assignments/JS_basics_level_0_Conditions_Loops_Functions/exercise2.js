/**Task:
 * Exercise 2: Maximum of Two Numbers
 */

import { takeInputNumber , closeInput } from "../helpers.js";

const maxOfTwo = (num1, num2) => {
    return num1 > num2 ? num1 : num1 === num2 ? "Equal" : num2;
}

export const run = async () => {
    const num1 = await takeInputNumber("Enter first number: ");
    const num2 = await takeInputNumber("Enter second number: ");
    closeInput();
    if(num1 && num2) {
        console.log(maxOfTwo(num1, num2));
    }
}