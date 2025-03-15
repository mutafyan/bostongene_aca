/**Task:
 * Write a code which prints the number of days in a month using switch / case.
 */

import { takeInputNaturalNumber, closeInput } from "../../helpers.js";

const getMonthDays = (month) => {
    const days31 = [1, 3, 5, 7, 8, 10, 12];
    const days30 = [4, 6, 9, 11];

    // since I want to check a condition but switch case
    // compares values, I will compare them to true
    switch(true) {
        case month === 2: // converts to true/false and compares to true
            return "28/29 days";
        case days30.includes(month):
            return "30 days";
        case days31.includes(month):
            return "31 days";
        default:
            return null;
    }
}

const takeInput = async () => {
    const inputMonth = await takeInputNaturalNumber("Enter a month number to get it's days (1-12): ");
    closeInput();
    if(!inputMonth || inputMonth > 12 || inputMonth < 1) {
        console.log("Invalid input! Please enter month number between 1-12.")
        return null;
    }
    return inputMonth;
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(getMonthDays(input) ?? "Unexpected error.");
    }
}