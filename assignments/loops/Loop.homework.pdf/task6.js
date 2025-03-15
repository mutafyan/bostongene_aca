/**Task 6 
 * Insert a number. Calculate product and sum of the digits of the number.
 * If product is divisible by the sum, print the quotient, otherwise print the remainder. 
 */

import { getDigitsOf, takeInputInteger, closeInput } from "../../helpers.js";

const calculateSum = (number) => {
    let sum = 0;
    getDigitsOf(number)?.forEach((val) => sum += val);
    return sum;
}

const calculateProduct = (number) => {
    let product = 1;
    const digits = getDigitsOf(number)
    if(digits.includes(0)) {
        console.log("The number contains 0!");
        return 0;
    } 

    for(dig of digits) {
        product *= dig;
    }
    return product;
}

const printQuotientOrRemainder = (number) => {
    if (number === 0) {
        console.log('Cannot calculate.');
        return;
    }

    const sum = calculateSum(number);
    const product = calculateProduct(number);

    if (sum === 0) {
        console.log('Cannot divide by zero.');
        return;
    }
    if (product === 0) {
        console.log("Skipping calculation.");
        return;
    }

    if (product % sum === 0) {
        const quotient = product / sum;
        console.log(`Quotient is ${quotient}.`);
    } else {
        const remainder = product % sum;
        console.log(`Remainder is ${remainder}.`);
    }
}

export const run = async () => {
    const number = await takeInputInteger("Enter an integer to calculate product / sum of it's digits: ");
    closeInput();
    if(number) {
        printQuotientOrRemainder(number);
    }
}