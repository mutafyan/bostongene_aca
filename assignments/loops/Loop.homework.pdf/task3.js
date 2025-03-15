/** Task:
 * Write a code to calculate the sum of digits in a number 
 */

import { takeInputInteger, closeInput, getDigitsOf} from "../../helpers.js";

const calculateSumDigits = (number) => {
    let sum = 0;
    // `${Math.abs(number)}`.split('').forEach((val) => sum += +val);
    // or
    // returns a list of digits converted to numbers
    const digits = getDigitsOf(number); // my helper function defined in helpers.js
    if(!digits) return 0;
    
    for(let d of digits) {
        sum += d;
    }
    return sum;
}

const takeInput = async () => {
    const number = await takeInputInteger("Input an integer number to calculate sum of its digits: ");
    closeInput();
    return number;
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(calculateSumDigits(input));
    }   
}