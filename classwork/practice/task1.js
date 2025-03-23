/**
 * Exercise 1
 * Create a function named myInterval, which takes two parameters, a callback function and 
 * an interval duration(milliseconds). After calling the myInterval function, the callback
 * function must be executed every given interval duration.
 * Note: 
 * Don’t use the setInterval method
 */

const myInterval = (callback, milliseconds) => {
    let result = null;
    const timeout = () => setTimeout(()=> {
        callback();
        timeout();
    }, milliseconds)
    result = timeout();
    return result;
}

myInterval(()=>console.log("Interval"), 1000);