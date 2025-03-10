/**Task
 * For a given natural number n, print the sum 1^2+2^2+...+n^2. 
 */
import {closeInput, takeInputNaturalNumber} from '../helpers.js';
const getSumOfSquares = (n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i*i;
    }
    return sum;
}


export const run = async () => {
    const n = await takeInputNaturalNumber('Enter a natural number: ');
    closeInput();
    if(n) {
        console.log(getSumOfSquares(n));
    }
}