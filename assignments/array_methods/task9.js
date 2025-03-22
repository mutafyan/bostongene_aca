// Given an array, return the sum of numbers that are 18 or over.

const getSumOver = (numbers, minValue) => numbers.reduce((sum, curr)=>curr >= 18 ? sum + curr : sum, 0);

export const run = () => console.log(getSumOver([1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]));