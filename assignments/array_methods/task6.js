// Given an array, return a new array that only includes the numbers. 

import { validateNumber } from "../helpers.js";

const getNumbers = (array) => array.filter((item) => validateNumber(item));

export const run = () => {
    console.log(getNumbers([1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN]));
};
