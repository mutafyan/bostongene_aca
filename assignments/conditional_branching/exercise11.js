/**Task
 * Given a number, determine if it's a perfect square (i.e., the square of an integer).
 * Print "Perfect square" if it is, and "Not a perfect square" otherwise. 
 */
import { validateNumber, takeUserInput, closeInput } from "../helpers.js";

const isPerfectSquare = (num) => {
    return Number.isInteger(Math.sqrt(num));
}

const takeInput = async () => {
    let num = +await takeUserInput("Input a number to check if it is a perfect square: ");
    closeInput();
    if(validateNumber(num)) {
        return num;
    } else {
        console.log("Not a valid number")
        return null;
    }
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(isPerfectSquare(input) ? "Perfect square" : "Not a perfect square");
    }
}