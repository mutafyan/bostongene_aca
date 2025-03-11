/**Task
 * Declare three variables. Two of them are the bounds of a range. 
 * Print “In bounds”, if the third number is in the range, 
 * otherwise print “Out of bounds”.
 */

import { closeInput, takeInputNumber } from "../../helpers.js";

const isInBounds = (lower, upper, num) => {
    return num >= lower && num <= upper;
}

const takeInput = async () => {
    let lower = await takeInputNumber("Input the lower bound of the range: ");
    let upper = await takeInputNumber("Input the upper bound of the range: ");
    let num = await takeInputNumber("Input a number to check if it is in bounds: ");

    closeInput();

    if(lower && upper && num) {
        return { lower, upper, num };
    } else {
        console.log("Invalid input. Exiting...");
        return null;
    }
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(isInBounds(input.lower, input.upper, input.num) ? "In bounds" : "Out of bounds");
    }
}