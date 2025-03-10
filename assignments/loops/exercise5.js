/**Task
 * Enter three numbers: X, Y, and A. Within the range X-Y,
 * display a table of cubes of integers that are divisible by A. 
 */

import {closeInput, takeInputNumber} from '../helpers.js';

const displayCubesDivisibleByA = (x, y, a) => {
    for(let i = x; i < y; i++) {
        if(i % a === 0) {
            console.log(i , ':', i**3);
        }
    }
}

const validateInput = (x, y, a) => {
    if(!x || !y || !a) {
        console.log('All inputs should be numbers');
        return false
    };
    if(x > y) {
        console.log('x should be less than y');
        return false;
    }
    if(a === 0) {
        console.log('a should not be zero');
        return false;
    }
    return true;
}

export const run = async () => {
    const x = await takeInputNumber('Enter X: ');
    const y = await takeInputNumber('Enter Y: ');
    const a = await takeInputNumber('Enter A: ');
    closeInput();
    if(validateInput(x, y, a)) {
        displayCubesDivisibleByA(x, y, a);
    }
}