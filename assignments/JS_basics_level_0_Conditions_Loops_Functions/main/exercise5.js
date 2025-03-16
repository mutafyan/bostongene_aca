/**Task:
 * Write a JavaScript function that finds the sum of all prime numbers up to a given number.
 */

import { takeInputNaturalNumber , closeInput} from "../../helpers.js";

const getSumAllPrime = (num) => {
    let sum = 0;
    for(let i = 2; i <= num; i++) {
        if(isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

const isPrime = (num) => {
    if(num === 1) return false;
    for(let i = 2; i < num; i++) {
        if(i % num === 0) {
            return false;
        }
    }
    return true;
}

export const run = async () => {
    const input = await takeInputNaturalNumber("Enter a number to calculate sum of prime numbers up to that: ");
    closeInput();
    if(input) {
        console.log("Sum:", getSumAllPrime(input));
    }
}