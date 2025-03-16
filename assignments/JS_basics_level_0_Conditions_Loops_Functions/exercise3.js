/**Task
 * Exercise 3: Area of a Rectangle
 */

import { takeInputNumber , closeInput } from "../helpers.js";

const getRectangleArea = (side1, side2) => {
    return side1 * side2;
}

export const run = async () => {
    const side1 = await takeInputNumber("Enter first side: ");
    const side2 = await takeInputNumber("Enter second side: ");
    closeInput();
    if(side1 && side2) {
        console.log(getRectangleArea(num1, num2));
    }
}