/**
 * Exercise 1: Even or Odd
 */

import { closeInput, takeUserInput } from "../helpers.js";

const isEven = (number) => {
    return number % 2 === 0 ? "Even" : "Odd";
}

export const run = async () => {
    const num = await takeUserInput("Enter a number to check if its odd or even: ");
    closeInput();
    if(num) {
        console.log(isEven(num));
    }
}