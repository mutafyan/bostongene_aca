/** Task:
 * Given n number. Write a program witch calculate sum of 1 - n numbers.  
 */

import { takeInputNaturalNumber, closeInput } from "../../helpers.js";

const calculateSumUpToNum = (num) => {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

const takeInput = async () => {
    // takes an input and validates it is a natural number
    // logs error message and returns null if input is not valid, else returns the num
    const num = await takeInputNaturalNumber("Enter a natural number to calculate sum of 1-n: ");
    closeInput();
    return num;
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(calculateSumUpToNum(input));
    }
}