/** Task:
 * Write a JavaScript program that calculates 
 * and displays the n-th term of an arithmetic
 * progression given the first two terms a1 and a2
 */

import { closeInput, takeInputNumber, takeInputNaturalNumber} from "../../helpers.js";

const arithmeticProgression = (a1, a2, n) => {
    return a1 + (n - 1) * (a2 - a1); // returns n'th term of the progression
}

const takeInput = async () => {
    console.log("Input first two terms of an arithmetic progression");
    const a1 = await takeInputNumber("a1: ");
    const a2 = await takeInputNumber("a2: ");
    console.log("Input n to find n-th term of progression");
    const n = await takeInputNaturalNumber("n: ");
    closeInput();
    if(!a1 || !a2 || !n) {
        console.log("Not valid numbers, exiting...");
        return null;
    };
    return { a1, a2, n };

}


export const run = async () => {
    const input = await takeInput();
    if(input) console.log(arithmeticProgression(input.a1, input.a2, input.n));
}

