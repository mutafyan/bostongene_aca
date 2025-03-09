// helper functions used throughout the project
import readline from 'readline';

// using node's built in readline interface to take user input from CLI
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
/** 
 * since .question() accepts a callback function,
 * which runs asynchronously
 * we must wrap it in a promise
 */
export const takeUserInput = (query) => {
    return new Promise((resolve) => {
      rl.question(query, (answer) => {
        resolve(answer);
      });
    });
};

export const closeInput = () => {
    rl.close();
};


export function validateNumber(num) {
    if(typeof num === "number" && !isNaN(num)){
        return true;
    } else {
        return false;
    }
}