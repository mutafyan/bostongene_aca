/** Task
 * Given three numbers. Sort them by the ascending order.
 */

import { closeInput, takeInputNaturalNumber, takeInputNumber } from "../../helpers.js";



// more inclusive way of sorting an array of any length
const sortAscending = (numbers) => {
    if(numbers.length <= 1) return null;
    // for each element in the array loop over it
    for(let i = 0; i < numbers.length; i++) {
        // loop over the array moving each element to 
        // right as long as it is greater than the next element
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] > numbers[j]) {
                const temp = numbers[i]; 
                numbers[i] = numbers[j]; // swap values
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

// prompting the user to enter the array needed to sort
const takeMultipleInputNumbers = async (n) => {
    const inputs = [];
    for(let i = 0; i < n; i++) {
        const item = await takeInputNumber(`Enter number ${i+1}: `);
        inputs.push(item);
    }
    return inputs;
}


// if we only want to work with 3 numbers 
const sortThreeNumbers = (a, b, c) => {
    // compare first to second
    if (a > b) {
        const temp = a;
        a = b; // swap
        b = temp;
    }
    if (a > c) {
        let temp = a;
        a = c;
        c = temp;
    }
    if (b > c) {
        let temp = b;
        b = c;
        c = temp;
    }
    return [a, b, c];
}

export const run = async () => {
    const n = await takeInputNaturalNumber('Enter the number of elements you want to sort: ');
    if(!n || n <= 1) return;
    const input = await takeMultipleInputNumbers(n);
    if(!input) return;
    closeInput();
    console.log("unsorted: ", input.join(', '));
    console.log("sorted: ", sortAscending(input).join(', '));

    console.log("sorted three numbers: ", sortThreeNumbers(5, 3, 9).join(', '));
}