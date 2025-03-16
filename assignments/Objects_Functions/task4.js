/**
 * Create a function groupUsers that takes an object as an argument and returns an array of user objects.
 * EX: groupUsers({ ‘Ann’: { age: 7 }, Sam: { age: 8 }, Bob: { age: 9 } })
 * Should return an array
 * [{ name: ‘Ann’, age: 7 }, { name: ‘Sam’, age: 8 }, { name: ‘Bob’, age: 9 }]
 */

function groupUsers(usersObj) {
    const usersArray = [];
    const entries = Object.entries(usersObj);
    for(const [name, info] of entries) {
        usersArray.push({name, ...info});
    }
    return usersArray;
}

console.log(groupUsers({ 'Ann': { age: 7 }, 'Sam': { age: 8 }, 'Bob': { age: 9 } }))