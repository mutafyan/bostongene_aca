/**Task
 * Declare three variables. Two of them are the bounds of a range. 
 * Print “In bounds”, if the third number is in the range, 
 * otherwise print “Out of bounds”.
 */

import { takeUserInput, closeInput, validateNumber } from "../helpers.js";

const isInBounds = (lower, upper, num) => {
    return num >= lower && num <= upper;
}

const takeInput = async () => {
    let lower = +await takeUserInput("Input the lower bound of the range: ");
    let upper = +await takeUserInput("Input the upper bound of the range: ");
    let num = +await takeUserInput("Input a number to check if it is in bounds: ");
    closeInput();

    if(validateNumber(lower) && validateNumber(upper) && validateNumber(num)) {
        return { lower, upper, num };
    } else {
        console.log("Not a valid number")
        return null;
    }
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(isInBounds(input.lower, input.upper, input.num) ? "In bounds" : "Out of bounds");
    }
}