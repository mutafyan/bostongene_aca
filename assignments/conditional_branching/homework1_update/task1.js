/**Task:
 * Given a number. Print “odd” if the number is odd and “even” if itʼs even. 
 */

import { closeInput, takeInputInteger } from "../../helpers.js";

const isEven = (num) => {
    return num % 2 === 0;
}

const takeInput = async () => {
    const num = await takeInputInteger("Enter a number to check if it is odd or even: ");
    closeInput();
    if(num) {
        return num;
    } else {
        return null;
    }
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(isEven(input) ? 'even' : 'odd');
    }
}