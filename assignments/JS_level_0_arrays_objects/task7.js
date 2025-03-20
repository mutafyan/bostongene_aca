/**
 * Compact. Write a method that clears the array from all unnecessary elements, 
 * like false, undefined, empty strings, zero, and null.
 * EX: Input [1,2, null, 3, undefined, 4, false] => Output  [1,2,3,4]
 */

const input = [1,2, null, 3, undefined, 4, false];
const compact = (array) => array.filter((item) => item); // filter converts to boolean value and returns only true ones

export const run = () => console.log(compact(input));