/** Task:
 * Given an age, figure out whether someone is a baby(1 months - 12 months),
 * toddler (1 year - 2 years), child(3 years - 12 years ), 
 * teenager(13 years - 17 years) or adult(18 years and more ). 
 * Also check that age in months is between 1 and 12. 
 */

import { validateInteger, takeUserInput, closeInput } from "../../helpers.js";


/** About the solution:
 * I used a regular expression to check if the input is in desired format,
 * which is '8 years', that is, a number followed by a string representing years or months. 
 * Also handles multiple spaces, or no space at all between number and string.
 * 
 * In validation function we will use .match() method to check if the input matches the pattern.
 * the output of the method is an array containing the number part and the rest of the string 
 * as [1] and [2] respectively. If not available will be empty strings.
 * e.g for '8 years' the output will be:
 * [
    '8 years',  // entire match (match[0])
    '8',        // digits (match[1])
    'years'     // rest of string (match[2])
   ]
 * We will then check if the number is a valid number and the rest of the string is either 'years' or 'months'.
 */
const format = (age) => {
    const match = age.match(/^(\d+)\s*(.*)$/);
    if(match[1] && match[2]) {
        const age = +match[1];
        const unit = match[2].toLowerCase();
        if(validateInteger(age) && age > 0 && (unit === 'year' || unit === 'month' || unit === 'years' || unit === 'months')) {
            return {age, unit};
        } else {
            return null;   
        }
    } else {
        return null;
    }
}


const validateAge = (age, unit) => {
    if((unit === 'months' && age >= 1 && age <= 12) || (unit === 'month' && age === 1)) {
        return ' baby';
    } else if((unit === 'years' && age >= 1) || (unit === 'year' && age === 1)) {
        if(age >= 1 && age <= 2) {
            return ' toddler';
        } else if(age >= 3 && age <= 12) {
            return ' child';
        } else if(age >= 13 && age <= 17) {
            return ' teenager';
        } else if(age >= 18) {
            return 'n adult';
        }
        return null;
    } else {
        return null;
    }
}

const takeInput = async () => {
    console.log("Please provide the age in years or months, e.g. '8 years' or '6 months'");
    const input = await takeUserInput("Enter your age: ");
    closeInput();
    if(input) {
        return format(input);
    } else {
        return null;
    }
}


export const run = async () => {
    const input = await takeInput();
    if(input) {
        const {age, unit} = input;
        const result = validateAge(age, unit);
        if(result) {
            console.log(`You are a${result}`);
        } else {
            console.log("Invalid input. Please provide a valid age in years or months.");
        }
    }
}

