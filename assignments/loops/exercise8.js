/** Task
 * Write a JavaScript code that counts the occurrences 
 * of a given digit within a given number using loops
 */
import { takeInputNumber, takeInputNaturalNumber, closeInput } from '../helpers.js';

const calculateOccurances = (num, digit) => {
    const numArray =  String(Math.abs(num)).split(''); // use abs to handle negative numbers
    let counter = 0;
    for(let i = 0; i < numArray.length; i++) {
        // used == to compare string to number
        // float values are handled too because . will never be equal 
        // to a digit which is verified natural number
        if(numArray[i] == digit) { 
            counter++;
        }
    }
    return counter;
}

export const run = async () => {
    const num = await takeInputNumber('Enter a number: ');
    const digit = await takeInputNaturalNumber('Enter a digit to calculate occurances in the number: ');
    closeInput();

    if(num && digit) {
        console.log(calculateOccurances(num, digit));
    }
}