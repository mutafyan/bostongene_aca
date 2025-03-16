/** Task:
 * Write a code asking the user his/her name and print ‘Hello dear [name]’.
 * [name] is the value that the user writes.
 */

import { closeInput, takeUserInput } from "../helpers.js"

export const run = async () => {
    const name = await takeUserInput("Enter your name: ");
    closeInput();
    if(name) {
        console.log(`Hello dear ${name}`);
    }
}