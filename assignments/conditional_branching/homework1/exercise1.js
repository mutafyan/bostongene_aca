/** Task:
 * Write a JavaScript program that calculates 
 * and displays the value of a quadratic expression 
 * ax^2 + bx + c at a given point x0
 */

// from helper functions to take user input, we need to close it after
import { takeInputNumber, closeInput } from "../../helpers.js";

// calculation
const quadraticExpression = (a, b, c, x) => {
  return a * x ** 2 + b * x + c;
};

// Async function to take user input
const takeInput = async () => {
  console.log('To calculate the quadratic expression [ax^2 + bx + c] in x_0, please enter parameters:\n');
  const a = await takeInputNumber('a: ');
  const b = await takeInputNumber('b: ');
  const c = await takeInputNumber('c: ');
  const x = await takeInputNumber('x_0: ');
  closeInput();
  if(!a || !b || !c || !x) {
    console.log('Invalid input. Exiting...');
    return null;
  }
  return { a, b, c, x }; // return as an object
};

// using ES6 standarts export this function to use this code as a module
export const run = async () => {
  const input = await takeInput();
  if(!input) return;
  
  const result = quadraticExpression(input.a, input.b, input.c, input.x);
  console.log(`\nResult: ${result}`);
};

