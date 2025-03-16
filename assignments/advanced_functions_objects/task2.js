/**
 * Given a word, create an object that stores the indexes of each letter in an array.
 * ● Make sure the letters are the keys.
 * ● Make sure the letters are symbols.
 * ● Make sure the indexes are stored in an array and those arrays are values.
 */

const mapLetters = (word) => {
    const letters = word.toLowerCase().split('');
    const result = {};
    for(let i = 0; i < letters.length; i++) {
        if(result[letters[i]]) {
            result[letters[i]].push(i);
        } else {
            result[letters[i]] = [i];
        }
    }
    return result;
}

console.log(mapLetters('dodo'));