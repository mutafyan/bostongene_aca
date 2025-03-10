/**Task
 * Print asterisk triangle patterns with for loops
 */


/**
 * To get an asterisk triangle we must use nested loops, 
 * iterating over needed asterisks and spaces for each line
 * and then joining them with \n to display the triangle vertically
*/


const N = 10;

const getAsteriskTriangle = () => {
    const lines = [];
    for (let i = 1; i <= N; i++) {
        let asterisks = '';
        for (let j = 0; j < i; j++) {
            asterisks += '*'; // count asterisks for each line
        }
        lines.push(asterisks);
    }
    return lines.join('\n'); // returns a string for displaying the triangle vertically
};



// reverse order
const getReverseAsteriskTriangle = () => {
    const lines = []
    for(let i = N; i > 0 ; i--) { // count down from N to 1
        let asterisks = '';
        for(let j = 0; j < i; j++) {
            asterisks += '*';
        }
        lines.push(asterisks);
    }
    return lines.join('\n');
}

const getInvertedAsteriskTriangle = () => {
    const lines = [];
    for(let i = 1; i <= N ; i++) {
        let spaces = '';
        for(let j = 0; j < N - i; j++) {
            spaces += ' '; // count how many spaces should be printed
        }
        let asterisks = '';
        for(let j = 0; j < i; j++) {
            asterisks += '*'; // count how many asterisks should be printed
        }
        
        lines.push(spaces + asterisks);
    }

    return lines.join('\n');
}

const getReverseInvertedAsteriskTriangle = () => {
    const lines = [];
    let spaces = '';
    for(let i = N; i > 0 ; i--) {  // count down from N to 1
        let asterisks = '';
        for(let j = 0; j < i; j++) {
            asterisks += '*'; // count how many asterisks should be printed
        }
        
        lines.push(spaces + asterisks);
        spaces += ' '; // add space after each line
    }
    return lines.join('\n');
}


/**
 * To print multiple asterisk triangles next to each other,
 * we will need to collect each triangle line by line in an array
 * split them by \n and then print them line by line
 * adjusting the padding
*/
const printAllTrianglesSideBySide = () => {
    const triangle1 = getAsteriskTriangle().split('\n');
    const triangle2 = getReverseAsteriskTriangle().split('\n');
    const triangle3 = getReverseInvertedAsteriskTriangle().split('\n');
    const triangle4 = getInvertedAsteriskTriangle().split('\n');
  
    const padSize = N + 2; // add padding for spacing between triangles
  
    for (let i = 0; i < N; i++) {
        // adjust padding for each line to be displayed correctly
        const line1 = triangle1[i].padEnd(padSize, ' ');
        const line2 = triangle2[i].padEnd(padSize, ' ');
        const line3 = triangle3[i].padEnd(padSize, ' ');
        const line4 = triangle4[i]; // last one doesn't need end padding
    
        console.log(line1 + line2 + line3 + line4);
    }
}

export const run = () => {
    printAllTrianglesSideBySide();
};
  