// What will be logged?

let x = 10;
function test() {
  let x = 20;
}
test();
console.log(x);

// 10, because x in the test function scope is declared and available only inside the function scope
// function test does not do anything, it just creates a variable in it's local scope and 
// deletes it upon finishing execution
// therefore the initial value of x will be logged