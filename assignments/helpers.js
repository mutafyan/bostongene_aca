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
  const input = await takeUserInput(message);
  if(!input) return null;
  const number = Number(input);
  if(validateNumber(number)) {
      return number;
  } else{
      console.log('Please enter a valid number');
      return null;
  }
}

export const takeInputInteger = async (message) => {
  const integer = await takeInputNumber(message);
  if(validateInteger(integer)) { // validate integer
      return integer;
  } else{
      console.log('Please enter a valid integer');
      return null;
  }
}

export const takeInputNaturalNumber = async (message) => {
  const naturalNumber = await takeInputNumber(message);
  if(validateInteger(naturalNumber) && naturalNumber > 0) { // validate natural number
      return naturalNumber;
  } else{
      console.log('Please enter a valid natural number');
      return null;
  }
}

export const getDigitsOf = (number) => {
    if(validateInteger(number)) {
        return `${Math.abs(number)}`.split('').map((val)=> +val);
    } else {
        console.log("Not a valid integer");
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

export function validateInteger(num) {
    if(validateNumber(num) && Number.isInteger(num)) {
        return true;
    } else {
        return false;
    }
}