/** 
 * Write a function to create a new array from the given one but with the reversed order.
 * EX: Input [1,2,3,4,5,6] => Output  [6,5,4,3,2,1] 
 */

const reverseOrder = (array) => array.reverse();

export const run = () => {
    const input = [1,2,3,4,5,6];
    console.log(reverseOrder(input));
}