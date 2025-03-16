/** Task:
 * Random Number Game
 * Write a JavaScript program that generates a random number between 1 and 100 
 * and prompts the user to guess the number. The program should provide feedback 
 * to the user (e.g., "Too high" or "Too low") until the correct number is guessed.
 */

import { takeInputInteger, closeInput } from "../../helpers.js";


const guessNumber = (number, random) => {
    if(number === random) {
        return "Correct!";
    } else if(number > random) {
        return "Too high";
    } else if(number < random ) {
        return "Too low";
    } else {
        return "Invalid input";
    }
}

// recursive solution
const playGame = async () => {
    const random = Math.round(Math.random() * 100);
    console.log(random)
    let result;
    do {
        const number = await takeInputInteger("Try to guess the number: ", true);
        if(number) {
            result = guessNumber(number, random);
            console.log(result);
        }
    } while(result !== "Correct!");

}

export const run = async () => {
    await playGame();
    closeInput();
}
