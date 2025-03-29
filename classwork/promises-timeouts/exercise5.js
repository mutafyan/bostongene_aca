Promise.resolve()
.then(() => console.log(1)) // logs 1
.catch(() => console.log(3)) // skip (no error)
.then(() => { console.log(2); throw new Error(); }) // will log 2 when error is catched
.then(() => console.log(4))     // no catch -> skip
.then(() => console.log(4))     // skip
Promise.resolve()
.then(() => console.log(11)) // log 11
.then(() => { console.log(12); throw new Error(); }) // throws new error which will be catched
.catch(() => console.log(13)) // catches 2 previous errors logs 2, then 12, and then logs 13
.catch(() => console.log(14)) // skip already catched
.then(() => console.log(15)) // log 15

//////////

Promise.resolve()
    .then(data => {
        throw new Error('Api Error'); // throws error returns nothing
        return 1;
    })
    .then(data => console.log('ok')) // skips because error is thrown
    .catch(error => {
        console.log(error.message); // logs 'Api Error'
        return "2"; 
    })
    .then(data => {
        console.log(data); // logs '2'
    })


/////

console.log(1) // logs 1 (synchronous code)
setTimeout(() => {
    console.log(2) // goes to web api until timeout is reached and then waits
}, 20)

Promise.resolve()
    .then(() => {
        console.log(3) // logs 3
        return 1 
    })
    .catch(e => console.log(e, 4)) // no error => skip
    .finally(res => console.log(res, 5)) // does not receive argument, logs undefined, 5, returns a new promise
    .then((res) => console.log(res)) // logs 1
console.log(6) // logs 6

// queue: 1, 6, 3, undefined, 5, 1, 2


//////
let a = 5;
setTimeout(() => {
    console.log(a); // goes to web api then logs 25
    a = 10;
}, 0);

let p = new Promise((resolve, reject) => {
    console.log(a); // sync code logs 5
    a = 25;
    resolve(); // does not resolve any value => returns undefined
});

p.then(res => {
    console.log('final result ', res) // logs final result undefined
});
console.log(a); // sync code logs 25

// queue: 5, 25, final result undefined, 25