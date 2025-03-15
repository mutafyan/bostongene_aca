/** Task:
 * Percentage marks obtained by a student in three exams are to be entered to a computer. 
 * An indication of Pass or Fail is given out after the three marks are entered. 
 * The criteria for passing are as follows: 
 * A student passes if all three examinations are passed. 
 * Additionally a student may pass if only one subject is failed but the overall average is greater than or equal to 50. 
 * The pass mark for an individual subject is 40. 
 */

import { takeInputNaturalNumber, closeInput } from "../../helpers.js";

const resultThreeExams = ( mark1, mark2, mark3 ) => {
    if(mark1 >= 40 && mark2 >= 40 && mark3 >= 40) {
        return "Passed";
    } else if(((mark1 + mark2 + mark3) / 3)  >= 50) {
        return "Passed by overall average";
    } else {
        return "Not passed";
    }
}

const validateInput = (mark1, mark2, mark3) => {
    if(!mark1 || !mark2 || !mark3) return false;
    // since the mark is a percentage it must be <= 100 (>0 is provided by takeInputNaturalNumber function)
    if(mark1 <= 100 && mark2 <= 100 && mark3 <= 100) {
        return true;
    }
    return false;
}

const takeInput = async () => {
    console.log("This program will check if the student passed 3 exams.")

    const mark1 = await takeInputNaturalNumber("Enter first mark: ");
    const mark2 = await takeInputNaturalNumber("Enter second mark: ");
    const mark3 = await takeInputNaturalNumber("Enter third mark: ");
    closeInput();

    if(!validateInput(mark1, mark2, mark3)) {
        console.log("Invalid input. Exiting...");
        return null;
    }
    return { mark1, mark2, mark3 };
}


export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(resultThreeExams(input.mark1, input.mark2, input.mark3));
    }
}

