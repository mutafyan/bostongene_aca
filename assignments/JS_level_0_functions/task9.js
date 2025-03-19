// What will be logged?

function outer() {
  let count = 1;
  function inner() {
    return count++;
  }
  
  return inner;
}

// we use closures in outer function which is a way of creating 'private' variables inside functions, 
// which are not accessible outside of the function scope by themselves but may be accessed through 
// inner function, which also holds references to variables in parent scope, and works on the same instance
// upon multiple executions 
let counter = outer(); // gets the execution result of outer function which is a reference to inner function, the counter variable is declared as 1
console.log(counter()); // executes the inner function, which returns 1, then adds 1 to it since the increment is post => logs 1
console.log(counter()); // this time the inner function works with already incremented value of counter = 2, which is returned then incremented again => logs 2
