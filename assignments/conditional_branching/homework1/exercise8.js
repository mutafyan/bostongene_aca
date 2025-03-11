/**Task
 * Write a code which checks whether a character is 
 * in the alphabet or not. 
 */

import { takeUserInput, closeInput } from "../../helpers.js";

/** 
 * in ASCII Table, each character has its own ASCII code
 * since we need only alphabetic values, we need this ranges
 * A-Z: 65-90, a-z: 97-122
 */
const isAlphabeticASCII = (char) => {
    const charCode = char.charCodeAt(0); // get ASCII code of the character
    return (code >=65 && code <= 90) || (code >= 97 && code <= 122);
}

/** 
 * alternative approach
 * since only alphabetic characters may be turned to uppercase or lowercase
 * we can check whether the character is equal to its uppercase or lowercase
 */
const isAlphabetic = (char) => {
    return char.toUpperCase() !== char.toLowerCase();
}

const takeInput = async () => {
    let char = await takeUserInput("Input a character to check if it is in the alphabet: ");
    closeInput();
    if(!char || char.length > 1) {
        console.log("Not a valid character")
        return null;
    }
    return char;
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(isAlphabetic(input) ? "Yes" : "No");
    }
}