/**
 * Create a function removeObjectDublications that takes an array as an argument 
 * and returns an array of unique objects.
 */

const testInput = [{ name: 'Ann' }, { name: 'Sam' }, { name: 'Bob' }, { name: 'Ann' }, { name: 'Bob' }]

function removeObjectDublications(array) {
    const unique = [];
    const names = new Set();

    for (const item of array) {
        if (!names.has(item.name)) {
            names.add(item.name);
            unique.push(item);
        }
    }

    return unique;
}

console.log(removeObjectDublications(testInput));