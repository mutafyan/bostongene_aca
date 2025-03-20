/**
 * From Pairs. Write a method that returns an object composed of key-value pairs.
 * EX: Input [[a,2], [b,4], [c,6]] => Output {a: 2, b: 4, c: 6}
 */

const entries = [['a', 2], ['b', 4], ['c', 6]];

const getObjectFromEntries = (entries) => Object.fromEntries(entries);

export const run = () => console.log(getObjectFromEntries(entries));
