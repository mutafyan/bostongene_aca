// What will be logged?

(function immediate(number) {
    const message = "Number is: ";
    console.log(message + number);
  })(5);

// we use immediate function invocation syntax, which is a way of creating a function and 
// executing it immediately, with it being destucted afterwards. meaning we are not able to 
// access the function in the outside scope. Therefore naming a function like this is meaningless.
// the value in the parenthesis at the end is used as an argument for the immediate function.
// log is: number is: 5
