/**
 * Create a function called mergeObjects that takes two objects 
 * as arguments and returns a new object with all the properties 
 * of the given objects.
 */

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

console.log(mergeObjects({a : 1}, {b : 2}));