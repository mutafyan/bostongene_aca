/**
 * Leap Year Check
 * Write a JavaScript function that determines whether a 
 * given year is a leap year or not. A leap year is a year
 * that is divisible by 4 but not divisible by 100 unless it is also divisible by 400.
 */

import { takeInputNaturalNumber, closeInput } from "../../helpers.js";

const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

export const run = async() => {
    const year = await takeInputNaturalNumber("Enter a year to check if it is leap year: ");
    closeInput();
    if(year) {
        console.log(isLeapYear(year) ? "Leap" : "Not leap");
    }
}