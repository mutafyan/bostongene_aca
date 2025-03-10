/**
 * For a given natural number n, print the sum 1×2+2×3+...+(n-1)×n. 
 */

import {closeInput, takeInputNaturalNumber} from '../helpers.js';

const getConsecutiveProductSum = (n) => {
    let sum = 0;
    for(let i = 1; i < n; i++) {
        sum += i*(i+1);
    }
    return sum;
}

export const run = async () => {
    const n = await takeInputNaturalNumber('Enter a natural number: ');
    closeInput();
    if(n) {
        console.log(getConsecutiveProductSum(n));
    }
}