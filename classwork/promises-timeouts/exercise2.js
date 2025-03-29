/**
 * Exercise 2
 * Create a function named squarePromise, that takes a promise that resolves with a
 * number or a string. Function should return a promise such that:
 ● If the input promise resolves with a number, the output promise resolves with the
    square of that number.
 ● If the input promise resolves with a string that we can turn into a number (like
    "1234"), the output promise resolves with the square of that number (1522756 in
    this example)
 ● If the input promise resolves with a string that we cannot turn into a number (like
    "asdf"), then we reject with a message like "Cannot convert 'asdf' to a
    number!"
 ● If the input promise rejects with an error, the output promise rejects with the same
    error
 */

const squarePromise = (promise)=> {
    let newPromise = new Promise((resolve, reject)=>{
        promise.then(
            (value)=> {
                if(!isNaN(value)) {
                    resolve(value**2);
                } else {
                    reject(`Cannot convert "${value}" to a number`);
                }
            }
        ).catch((value)=>{
            reject(value);
        })

    });
    return newPromise;
}

let promiseInner = new Promise((_, reject) => reject(123));
squarePromise(promiseInner).then(console.log).catch(e=>console.log(e));