/** Task 7:
 * Write a code to print fibonacci for a given value of n. 
 */

import { closeInput, takeInputNaturalNumber } from "../../helpers.js";


// returns n'th number of fibonacci sequence using recursion
const fibonacci = (n) => {
    if (n < 2){
        return 1;
    } else {
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

// prints fibonacci sequence up to number n
const printFibonacci = (n) => {
    if(n <= 0) {
        console.log("Please enter a positive integer. Exiting..");
        return;
    }
    const sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(fibonacci(i));
    }
    console.log(sequence.join(', '));
}


export const run = async () => {
    const number = await takeInputNaturalNumber("Enter a natural number for fibonacci sequence: ");
    closeInput();
    if(number) {
        printFibonacci(number);
    }
}
