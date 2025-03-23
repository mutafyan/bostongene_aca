/**
 * Create a function that takes in a single parameter and returns a new promise. Using
 * setTimeout, after 500 milliseconds, the promise will either resolve or reject some value. If
 * the parameter of the function is a string, the promise resolves with that same string
 * uppercased. If the parameter of the function is anything but a string, it rejects with that same
 * value.
 */

const paramPromise = (param) => new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(typeof param === 'string') {
                resolve(param.toUpperCase());
            } else {
                reject(param);
            }
        }, 500)
    }
);

paramPromise('pspsq').then(console.log).catch(console.log);