/**Task
 * Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise.
 */
import { takeUserInput, closeInput, validateNumber } from "../helpers.js";


// returns a boolean value
const isNegative = (num) => {
    return num < 0;
}

const takeInput = async () => {
    // convert string input to number
    let num = +await takeUserInput("Input a number to check if it is negative: ");
    closeInput();
    // return the number if valid
    if(validateNumber(num)) {
        return num;
    } else {
        console.log("Not a valid number")
        return null;
    }
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(isNegative(input) ? "Yes" : "No");
    }
}