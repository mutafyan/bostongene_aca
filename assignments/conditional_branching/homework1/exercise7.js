/**Task
 * Given a name. Print "Your name is valid",
 * if the length of name is greater or equal 4,
 * otherwise print "Invalid name".
 */

import { takeUserInput, closeInput } from "../../helpers.js";

const checkNameLength = (name) => {
    const MIN_NAME_LENGTH = 4;
    return name.length >= MIN_NAME_LENGTH;
}


const takeInput = async () => {
    let name = await takeUserInput("Input a name: ");
    closeInput();
    return name;
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(checkNameLength(input) ? "Your name is valid" : "Invalid name");
    }
}