/** Task:
 * Enter a number. Find the difference between its biggest and smallest digits. 
 */

import { getDigitsOf, takeInputInteger, closeInput } from "../../helpers.js"

const findDiffBiggestAndSmallestDigits = (number) => {
    const digits = getDigitsOf(number);
    
    return findMax(digits) - findMin(digits);
}

const findMin = (arr) => {
    let min = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

const findMax = (arr) => {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

export const run = async () => {
    const input = await takeInputInteger("Enter a number to calculate the diff between its biggest and smallest digits: ");
    closeInput();
    if(input) {
        console.log(findDiffBiggestAndSmallestDigits(input));
    }
}