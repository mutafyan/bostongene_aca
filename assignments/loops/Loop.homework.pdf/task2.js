/** Task:
 * Insert a digit and a number. Check whether 
 * the digits contains in the number or not.
 */

import { takeInputNaturalNumber, takeInputNumber, closeInput } from "../../helpers.js";

const containsDigit = (number, digit) => {
    // without loop one line solution
    // return `${number}`.includes(`${digit}`);
    
    const numDigits = `${Math.abs(number)}`.split('');
    for(let dig of numDigits) {
        if(dig == digit) {
            return true;
        }
    }
    return false;
}

const takeInput = async () => {
    const number = await takeInputNumber("Enter the number you want to check: ");
    const digit = await takeInputNaturalNumber("Enter the digit you want to find in the number: ");
    closeInput();
    if(number && digit) {
        return {number, digit};
    } else {
        return null;
    }
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(containsDigit(input.number, input.digit) ? "Yes" : "No");
    }
}

