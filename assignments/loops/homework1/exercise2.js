/**Task
 * For a given natural number n, print the sum 1^3+2^3+...+n^3. 
 */

import {closeInput, takeInputNaturalNumber} from '../../helpers.js';
const getSumOfCubes = (n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i**3;
    }
    return sum;
}


export const run = async () => {
    const n = await takeInputNaturalNumber('Enter a natural number: ');
    closeInput();
    if(n) {
        console.log(getSumOfCubes(n));
    }
}