// 8. What will be logged?

let num = 30;
function showNum() {
  let num = 20;
  console.log(num);
}
showNum(); // (1)
console.log(num); // (2)

/**
 * (1) the log will be 20, because our function does not accept any arguments and is using 
 * it's locally declared and defined value to log it.
 * 
 * (2) the log will be 30, because we are passing the num variable to log function, which is defined 
 * in the same scope as the log call and has a value of 30. 
 */



