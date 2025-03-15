/** Task:
 * Write a program which will compute the area of a rectangular 
 * or a triangle after prompting the user to type the name of the 
 * figure name. Also check that entered numbers are positive. 
 * For the triangle entered numbers are height and and base. 
 */

import { closeInput, takeInputNaturalNumber, takeUserInput } from "../../helpers.js";

const getTriangleAreaFromInput = async () => {
    const base = await takeInputNaturalNumber("Enter the base of the triangle: ");
    const height = await takeInputNaturalNumber("Enter the height of the triangle: ");
    closeInput();
    if(!validateInput(base, height)) {
        return null;
    }
    return base * height / 2;
}

const getRectangleAreaFromInput = async () => {
    const length = await takeInputNaturalNumber("Enter the length of the rectangle: ");
    const width = await takeInputNaturalNumber("Enter the width of the rectangle: ");
    closeInput();
    if(!validateInput(length, width)) {
        return null;
    }
    return length * width;
}

const validateInput = (num1, num2) => {
    if(num1 && num2 && num1 > 0 && num2 > 0) return true;
    else {
        console.log("Please enter only positives. Exiting...");
        return false;
    }
}

export const run = async () => {
    const shape = await takeUserInput("Enter the shape you want to calculate the area of (triangle/rectangle): ");
    if(shape === "triangle") {
        const area = await getTriangleAreaFromInput();
        if(area) {
            console.log(`The area of the triangle is ${area}`);
            return;
        }
    } else if(shape === "rectangle") {
        const area = await getRectangleAreaFromInput();
        if(area) {
            console.log(`The area of the rectangle is ${area}`);
            return;
        }
    } else {
        console.log("Invalid input. Exiting...");
    } 
    closeInput();
}