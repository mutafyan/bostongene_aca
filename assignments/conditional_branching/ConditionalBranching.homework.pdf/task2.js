/** Task:
 * Check if a number is a multiple of 
 * 3, 5 or 7 and output the appropriate message. 
 */

import { takeInputNumber, closeInput, takeInputInteger } from "../../helpers.js";


// this function will accept a number and an array of 
// possible divisors as arguments and return 
// real divisors as a list
const multiplesOf = (num, divisors) => {
    const multiples = [];
    for(let i = 0; i < divisors.length; i++) {
        if(num % divisors[i] === 0) {
            multiples.push(divisors[i]);
        }
    }
    return multiples;
}

const takeInput = async () => {
    const num = await takeInputInteger("Input a number to check if it is a multiple of 3, 5 or 7: ");
    closeInput();
    if(num) {
        if(num === 0) {
            console.log('Zero is a multiple of all numbers');
            return null;
        }
        return num;
    } else {
        return null;
    }
}

const outputMessage = (num, divisors, multiples) => {
    if(multiples.length === 0) {
        console.log(`${num} is not a multiple of ${divisors.join(', ')}`);
    } else {
        console.log(`${num} is a multiple of ${multiples.join(', ')}`);
    }
}

// alternatively, if we only need to check for one group of divisors
// e.g. 3, 5, 7, we can use the following function
const multiplesOf357 = (num) => {
    const multiples = [];
    if(num % 3 === 0) {
        multiples.push(3);
    }
    if(num % 5 === 0) {
        multiples.push(5);
    }
    if(num % 7 === 0) {
        multiples.push(7);
    }
    return multiples;
}

// strict messages for multiples of 3, 5 and 7
// by checking the length of multiples array we handle edge cases
// and then by conditional chaining we output the appropriate message
const outputMessage357 = (num, multiples) => {
    switch (multiples.length) {
        case 0:
            console.log(`${num} is not a multiple of 3, 5 or 7`);
            break;
        case 3:
            console.log(`${num} is a multiple of 3, 5 and 7`);
            break;
        case 2:
            if (multiples.includes(3) && multiples.includes(5)) {
                console.log(`${num} is a multiple of 3 and 5`);
            } else if (multiples.includes(3) && multiples.includes(7)) {
                console.log(`${num} is a multiple of 3 and 7`);
            } else if (multiples.includes(5) && multiples.includes(7)) {
                console.log(`${num} is a multiple of 5 and 7`);
            }
            break;
        case 1:
            if (multiples.includes(3)) {
                console.log(`${num} is a multiple of 3`);
            } else if (multiples.includes(5)) {
                console.log(`${num} is a multiple of 5`);
            } else if (multiples.includes(7)) {
                console.log(`${num} is a multiple of 7`);
            }
            break;
    }
}   



export const run = async () => {
    const divisors = [3, 5, 7]; // you may change them here, program handles any number of divisors
    const input = await takeInput();
    if(input) {
        // or if you need only 3, 5 and 7, you may 
        // change the functions here to multiplesOf357 and outputMessage357
        const multiples = multiplesOf(input, divisors);
        outputMessage(input, divisors, multiples);
    }
}