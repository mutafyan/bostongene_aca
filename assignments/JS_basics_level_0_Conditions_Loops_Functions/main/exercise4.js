/** 
 * Calculator
 * Write a JavaScript function that takes two numbers and an operator 
 * (+, -, *, /) as input and performs the corresponding mathematical 
 * operation using the switch statement. Return the result of the calculation.
 */

import { closeInput, takeInputNumber, takeUserInput } from "../../helpers.js";

// alternative solution
const calculateObj = (num1, sign, num2) => {
    const obj = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '/': (num1, num2) => num1 / num2,
        '*': (num1, num2) => num1 * num2,
    }

    return obj[sign](num1, num2);
}

const calculate = (num1, operation, num2)=>{
    switch(operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1*num2;
        case '/':
            if(num2 === 0) {
                console.log("Cannot divide by zero");
                return null;
            }
            return num1/num2;
        default:
            console.log("Not a valid operation.");
            return null;

    }
}

export const run = async () => {
    console.log("Enter numbers and operation to calculate");
    const num1 = await takeInputNumber("Enter first number: ");
    const operation = await takeUserInput("Enter operation (+, -, *, /): ");
    const num2 = await takeInputNumber("Enter second number: ");
    closeInput();
    if(num1 && num2 && operation) {
        console.log(calculate(num1, operation, num2));
    }
}