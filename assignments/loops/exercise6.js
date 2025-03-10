/**Task
 * Develop a JavaScript program enabling users 
 * to define an array's size and input its elements via prompt. 
 */

import {closeInput, takeInputNaturalNumber, takeUserInput} from '../helpers.js';

const takeInput = async (n) => {
    const inputs = [];
    for(let i = 0; i < n; i++) {
        const item = await takeUserInput(`Enter element ${i+1}: `);
        inputs.push(item);
    }
    return inputs;
}

export const run = async () => {
    const n = await takeInputNaturalNumber('Enter the size of the array: ');
    if(n) {
        const arr = await takeInput(n);
        console.log(arr);
    }
    closeInput();
}