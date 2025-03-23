/** 
 * Exercise 2
 * Create a function named myTimeout, which takes two parameters, 
 * a callback function and an interval duration(milliseconds). 
 * After calling the myTimeout function, the callback function must be 
 * executed after duration time has passed.
 * Note: 
 * Don’t use the setTimeout method
 */

const myTimeout = (callback, duration) => {
    const id = setInterval(()=>{
        callback();
        clearInterval(id);
    }, duration);
}

myTimeout(()=>console.log("timeout"), 2000);