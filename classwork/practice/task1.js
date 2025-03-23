/**
 * Exercise 1
 * Create a function named myInterval, which takes two parameters, a callback function and 
 * an interval duration(milliseconds). After calling the myInterval function, the callback
 * function must be executed every given interval duration.
 * Note: 
 * Don’t use the setInterval method
 */

const myInterval = (callback, milliseconds) => {
    for(let i = 1000; i <= milliseconds; i+=1000) {
        setTimeout(callback, i);
    }
}

myInterval(()=>console.log("Interval"), 5000);