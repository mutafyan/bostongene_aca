/**
 * Given the following code rewrite it using only two if operators. (Hint: use logical operators). 
 */

const n = 15;

let i = 0, j = 0;

if(n % 2 === 0 && !Math.floor(n / 10)) {
    i++;
}

if(n % 3 === 0 && n % 10 === 1) {
    j++;
}