import { takeUserInput, closeInput} from "../helpers.js"

/**
 * Given a word, compute the scrabble score for the given word. 
 * To calculate scrabble score use the following table of scores: 
 */

const scoreTable = [ // score = index + 1
    'aeioulnrst', 
    'dg',
    'bcmp', 
    'fhvwy', 
    'k', 
    'jx', 
    'qz', 
]

const scrabble = (word, scoreTable) => {
    return word.split('').reduce((score, letter) => {
        scoreTable.forEach((key, index) => {
            if (key.includes(letter.toLowerCase())) {
                score += index + 1;
            }
        });
        return score;
    }, 0);
}

export const run = async () => {
    const input = await takeUserInput("Enter a word to calculate its scrabble score: ");
    closeInput();
    if(input){
        console.log(scrabble(input, scoreTable));
    }
}