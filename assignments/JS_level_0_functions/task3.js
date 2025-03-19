/**
 * Fix the Function to Handle Edge Case
 */

function divide(a, b) {
    if(b === 0) {
        console.log("Cannot divide by zero!");
        return null;
    }
    return a / b;
}
console.log(divide(10, 0));