/**Task
 * Given a number. Determine whether it consists of 2 digits 
 * and whether the first di git is greater than the second one.
 * Print “yes” if it is, otherwise print “no”. 
 */

import { closeInput, takeInputInteger } from "../../helpers.js";

const isTwoDigits = (num) => {
    return num > 9 && num < 100;
}

const firstDigitGreaterThanSecond = (num) => {
    // split to digits and convert to integers
    const digits = `${num}`.split('').map(digit => parseInt(digit));
    return digits[0] > digits[1];
}

const takeInput = async () => {
    let num = await takeInputInteger("Input a number to check if it is a 2-digit number and if the first digit is greater than the second: ");
    closeInput();
    if(num) {
        num = Math.abs(num); // convert to positive to handle negative numbers
        if(!isTwoDigits(num)) {
            console.log("Not a 2-digit number");
            return null;
        }
        return num;
    } else {
        console.log("Invalid input. Exiting...")
        return null;
    }
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(firstDigitGreaterThanSecond(input) ? "Yes" : "No");
    }
}
