/** Task:
 * Power Calculation
 * Write a JavaScript function that calculates the result of raising a      
 * given base to a given exponent.
 */

import { closeInput, takeInputInteger, takeInputNumber } from "../../helpers.js";

const powerOf = (num, exp) => {
    return num ** exp;
}

export const run = async () => {
    console.log("Calculate given number to given exponent")
    const number = await takeInputNumber("Enter the number: ");
    const exp = await takeInputInteger("Enter the exponent: ");
    closeInput();
    if(number && exp) {
        console.log(powerOf(number, exp));
    }
}