/**Task
 * Write a code which prints day of week.
 */

import { validateNumber, takeUserInput, closeInput } from "../helpers.js";

const getDayOfWeek = (day) => {
    switch(day) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Please enter a number between 1 and 7";
    }
}

const takeInput = async () => {
    const day = +await takeUserInput("Input a number between 1 and 7: ");
    closeInput();
    if(validateNumber(day)) {
        return day;
    } else {
        console.log("Not a valid number")
        return null;
    }
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(getDayOfWeek(input));
    }
}