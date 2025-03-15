/** Task
 * Write a program that prints your name and surname n times. 
 */


import {closeInput, takeInputNaturalNumber} from '../../helpers.js';

const printNameNTimes = (name, n) => {
    for(let i = 0; i < n; i++) {
        console.log(name);
    }
}

export const run = async () => {
    const n = await takeInputNaturalNumber('How many times should the name be printed? ');
    closeInput();
    if(n) {
        printNameNTimes('Davit Mutafyan', n);
    }
}