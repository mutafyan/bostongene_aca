/** Task:
 * Write a JavaScript program that calculates 
 * and displays the n-th term of an arithmetic
 * progression given the first two terms a1 and a2
 */

import {validateNumber, takeUserInput, closeInput} from "../helpers.js";

const arithmeticProgression = ([a1, a2, n]) => {
    return a1 + (n - 1) * (a2 - a1); // returns n'th term of the progression
}

const takeInput = async () => {
    console.log("Input first two terms of an arithmetic progression");
    const a1 = +await takeUserInput("a1: ");
    const a2 = +await takeUserInput("a2: ");
    console.log("Input n to find n-th term of progression");
    const n = +await takeUserInput("n: ");
    closeInput();
    if(!validateNumber(a1) || !validateNumber(a2) || !validateNumber(n)) {
        console.log("Not valid numbers");
        return null;
    };
    return [a1, a2, n];

}


export const run = async () => {
    const inputValues = await takeInput();
    if(inputValues) console.log(arithmeticProgression(inputValues));
}

