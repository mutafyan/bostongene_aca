/**Task
 * Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise.
 */
import { closeInput, takeInputNumber } from "../../helpers.js";


// returns a boolean value
const isNegative = (num) => {
    return num < 0;
}

const takeInput = async () => {
    // get a number input // returns null if not a valid number is entered
    let num = await takeInputNumber("Enter a number to check if it is negative: ");
    closeInput();
    // return the number if valid
    if(num) {
        return num;
    } else {
        console.log("Invalid input. Exiting...")
        return null;
    }
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(isNegative(input) ? "Yes" : "No");
    }
}