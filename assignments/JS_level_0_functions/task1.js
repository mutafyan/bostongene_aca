/**
 * Fix the scope issue:
 *  function greet() {
        message = "Hello, world!";
    }
    greet();
    console.log(message);
 */

function greet(message = "Hello, world!") {
    console.log(message);
}
greet("Valod");