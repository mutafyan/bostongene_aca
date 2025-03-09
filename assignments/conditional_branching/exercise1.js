/** Task:
 * Write a JavaScript program that calculates 
 * and displays the value of a quadratic expression 
 * ax^2 + bx + c at a given point x0
 */

// from helper functions to take user input, we need to close it after
import { takeUserInput, closeInput } from "../helpers.js";

// calculation
const quadraticExpression = ([a, b, c, x]) => {
  return a * x ** 2 + b * x + c;
};

// Async function to take user input
const takeInput = async () => {
  console.log('To calculate the quadratic expression [ax^2 + bx + c] in x_0, please enter parameters:\n');
  const a = +await takeUserInput('a: ');
  const b = +await takeUserInput('b: ');
  const c = +await takeUserInput('c: ');
  const x = +await takeUserInput('x_0: ');
  closeInput();
  return [a, b, c, x];
};

// using ES6 standarts export this function to use this code as a module
export const run = async () => {
  const inputValues = await takeInput();
  const result = quadraticExpression(inputValues);
  console.log(`\nResult: ${result}`);
};

