/**Task
 * Given a number, determine if it's a perfect square (i.e., the square of an integer).
 * Print "Perfect square" if it is, and "Not a perfect square" otherwise. 
 */
import { closeInput, takeInputNumber } from "../../helpers.js";

// if it is a perfect square, the square root will be an integer
const isPerfectSquare = (num) => {
    return Number.isInteger(Math.sqrt(num)); 
}

const takeInput = async () => {
    let num = await takeInputNumber("Input a number to check if it is a perfect square: ");
    closeInput();
    if(num && num >= 0) {
        return num;
    } else {
        console.log("Invalid input. Exiting...");
        return null;
    }
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(isPerfectSquare(input) ? "Perfect square" : "Not a perfect square");
    }
}