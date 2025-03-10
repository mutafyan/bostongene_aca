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

// when using readline interface, we must close it after finishing taking inputs
export const closeInput = () => {
    rl.close();
};

// close readline manually when using
export const takeInputNumber = async (message) => {
  const n = +await takeUserInput(message);
  if(validateNumber(n)) {
      return n;
  } else{
      console.log('Please enter a valid number');
      return null;
  }
}

export const takeInputNaturalNumber = async (message) => {
  const n = +await takeUserInput(message);
  if(validateNumber(n) && Number.isInteger(n) && n > 0) { // validate natural number
      return n;
  } else{
      console.log('Please enter a valid number');
      return null;
  }
}


export function validateNumber(num) {
    if(typeof num === "number" && !isNaN(num)){
        return true;
    } else {
        return false;
    }
}