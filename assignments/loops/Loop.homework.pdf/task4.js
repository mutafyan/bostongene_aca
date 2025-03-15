/** Task:
 * Enter a number. Reverse its first and last digits. Print the new number. 
 */

import { takeInputInteger, closeInput, getDigitsOf } from "../../helpers.js";

const reverseFirstLastDigits = (number) => {
    const digits = getDigitsOf(number);
    // not a 2 digit number
    if(digits.length < 2) return number;

    const lastIndex = digits.length - 1;
    const temp = digits [0];
    digits[0] = digits[lastIndex];
    digits[lastIndex] = temp;

    return Number(digits.join(''));
}

const takeInput = async () => {
    const number = await takeInputInteger("Enter an integer number to reverse its first and last digits: ");
    closeInput();
    return number;
}

export const run = async () => {
    const input = await takeInput();
    if (input) {
        console.log(reverseFirstLastDigits(input));
    }
}