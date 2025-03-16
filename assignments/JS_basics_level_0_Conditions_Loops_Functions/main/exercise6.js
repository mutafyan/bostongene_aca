/**
 * Write a JavaScript function that prints a pyramid pattern of asterisks (*) 
 * based on a given number of rows. For example, if the input is 5, the pattern should be:
 */

import { takeInputNaturalNumber, closeInput } from "../../helpers.js";

const printPyramid = (rows) => {
    for (let i = 1; i <= rows; i++) {
        const spaces = ' '.repeat(rows - i); // returns a string with the value copied n times
        const asterisks = '*'.repeat(2 * i - 1); 
        console.log(spaces + asterisks);
    }
};


export const run = async () => {
    const rows = await takeInputNaturalNumber("Enter the number of rows for the pyramid: ");
    closeInput();
    if(rows) {
        console.log('\n');
        printPyramid(rows);
    }
}