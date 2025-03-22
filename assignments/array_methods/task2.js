/** Convert a long phrase to its acronym. */
import { takeUserInput, closeInput } from '../helpers.js';

const getAcronym = (phrase) => phrase.split(' ').map((word)=>word.split('')[0]).join('').toUpperCase();

export const run = async () => {
    const phrase = await takeUserInput("Enter a phrase to get its acronym: ");
    closeInput();

    if(phrase) {
        console.log(getAcronym(phrase));
    }
}