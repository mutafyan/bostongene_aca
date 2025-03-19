/**
 * 11. Write a Function to Calculate Factorial
 * Write a function named factorial that takes a single number n and 
 * returns its factorial. The factorial of a number is the product of 
 * all positive integers less than or equal to n.
 */

import { takeInputNaturalNumber, closeInput } from "../helpers.js";
function factorial(n) {
    let fact = 1;
    for(let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

async function takeInput(){
    const n = await takeInputNaturalNumber("Enter a natural number to calculate it's factorial: ");
    closeInput();
    if(n) {
        return n;
    } else {
        console.log("Not valid input. Exiting...");
        return null;
    }
}

export async function run() {
    const number = await takeInput();
    if(!number) return;
    console.log(`Factorial of ${number} is:`, factorial(number));
}
