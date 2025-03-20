/**
 * Unique. Write a method that returns a duplicate-free array
 * EX: Input [1,2,2,3,4,5,6,6] => Output  [1,2,3,4,5,6]
 */

const unique = (arr) => [...new Set(arr)];
export const run = () => {
    const input = [1, 2, 2, 3, 4, 5, 6, 6];
    console.log(unique(input))
};