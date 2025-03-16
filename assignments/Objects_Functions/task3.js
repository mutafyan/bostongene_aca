/**
 * Create a function called countEachName, that takes an array 
 * of usernames as an argument and returns an object with each 
 * name occurrence count.
 */

const userNames = ['Arsen', 'Arman', 'Ani', 'Bagrat', 'Ani', 'Arsen'];

function countEachName(names) {
    const countNames = {};
    for(const name of names) {
        if(countNames[name]) {
            countNames[name] += 1;
        } else {
            countNames[name] = 1;
        }
    }
    return countNames;
}

console.log(countEachName(userNames));