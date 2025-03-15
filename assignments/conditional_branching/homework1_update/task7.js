/**Input three numbers a, b, c respectively, 
 * where a is a non zero number and write a program to 
 * solve quadratic equations: ax^2 + bx + c . 
 * (Hint: use Math.pow or Math.sqrt). 
 */

import { takeInputNumber, closeInput } from "../../helpers.js";

const quadraticEquation = (a, b, c) => {
    // ax^2 + bx + c
    // D = b^2 - 4ac
    // x1,2 = (-b +- Sqrt(D)) / 2a
    const disc = Math.pow(b, 2) - 4*a*c;
    if(disc > 0) {
        const x1 = (-b + Math.sqrt(disc)) / (2*a);
        const x2 = (-b - Math.sqrt(disc)) / (2*a);
        return `Solutions are ${x1}, ${x2}`;
    } else if (disc === 0) {
        const x = -b / (2*a);
        return `Solution is ${x}`;
    } else {
        return "Solution does not exist.";
    }
}

const takeInput = async () => {
    console.log("Enter three numbers to solve quadratic expression ax^2 + bx + c = 0.");
    const a = await takeInputNumber("(Non-zero) a: ");
    const b = await takeInputNumber("b: ");
    const c = await takeInputNumber("c: ");

    closeInput();
    if(a && b && c) {
        if(a === 0) {
            console.log("a must be not zero. Enter valid constants. Exiting...");
            return null;
        }
        return {a, b, c}
    } else {
        console.log("Invalid input. Exiting..");
        return null;
    }
}


export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(quadraticEquation(input.a, input.b, input.c));
    }
}