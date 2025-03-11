/**Task
 * Write a JavaScript program to calculate the sum of the 
 * first two digits and the sum of the last two digits in 
 * a four-digit number. 
 */

import { closeInput, takeInputInteger } from "../../helpers.js"

// accepts a 4 digit absolute value int 
const calculateSumFourDigit = async (num) => {
    // we can convert the 4 digit num to a string and split it to digits
    // then convert the digit strings back to integers
    const digits = `${num}`.split('').map(digit => parseInt(digit));

    const sumFirstTwo = digits[0] + digits[1];
    const sumSecondTwo = digits[2] + digits[3];

    console.log(`First two digits: ${digits[0]} + ${digits[1]} = ${sumFirstTwo}`);
    console.log(`Second two digits: ${digits[2]} + ${digits[3]} = ${sumSecondTwo}`);
}

const takeInput = async () => {
    // get integer input
    let num = await takeInputInteger("Input a 4-digit number to calculate the sum of the first two and last two digits: ");
    closeInput();
    if(num) {
        // ensure that the number is 4 digit
        const absNum = Math.abs(num); // use absolute value to handle negative numbers
        if (absNum < 1000 || absNum > 9999) {
            console.log("Not a 4-digit number");
            return null;
        }

        return absNum;
    } else {
        console.log("Invalid input. Exiting...");
        return null;
    }
}

export const run = async () => {
    const input = await takeInput();
    if(input) calculateSumFourDigit(input);
}