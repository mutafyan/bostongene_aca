// What will be logged?

console.log(add(10, 5));
function add(a, b) {
  return a + b;
}

// 15, which is the output of add function.
// if we were to use arrow functions instead we would get a reference error because arrow functions
// do not give permission to access them before initialization ,  unlike function declarations!
// so therefore we are fine here, we are using function declaration for the add function

