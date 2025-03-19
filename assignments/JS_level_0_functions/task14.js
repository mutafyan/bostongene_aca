/**
 * 14. Power Calculation
 * Write a JavaScript function that calculates the result of raising a 
 * given base to a given exponent (don’t use built-in operators).
 */

import { closeInput, takeInputInteger, takeInputNumber } from "../helpers.js";


// supports negative numbers and not integer base numbers
function pow(number, exponent) {
    if(exponent === 0) return 1;
    if(number === 0) return 0;
    let result = 1;
    for(let i = 0; i < Math.abs(exponent); i++) {
        result *= number;
    }
    return exponent > 0 ? result : (1 / result);
}

export const run = async () => {
    const number = await takeInputNumber("Enter a base number to calculate it's raise to exponent: ");
    const exponent = await takeInputInteger("Enter the exponent number: ");
    closeInput();
    if(number && exponent) {
        console.log(pow(number, exponent));
    } else {
        console.log("Not valid input. Exiting...");
    }

}