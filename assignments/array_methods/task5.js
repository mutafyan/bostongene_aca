/** 
 * Write a function which parses string integers. If it's not possible to parse, then add null 
 */

const parseIntegers = (args) => args.map((str)=>{
    const res = parseInt(str);
    return res || res === 0 ? res : null;
});

// not using built in methods
const parseIntegersAlt = (args) => args.map((str)=>{
    let i = 0;
    let sign = 1;
    let result = 0;
    let isNumber = false;
    // skip whitespaces
    while(str[i] === ' ') {
        i++;
    }
    
    // manage number sign
    if(str[i] === '-') {
        sign = -1;
        i++;
    } else if(str[i] === '+') {
        i++;
    }
    
    while(i < str.length, str[i] >= 0, str[i] <= 9) {
        isNumber = true; // handle edge case when number is 0
        result = result * 10 + (str[i] - 0); // shifts result last digit by doing *10 and adds digit by converting it to number ( -0)
        i++;
    }

    return (result || result === 0) && isNumber ? result * sign : null;
});

export const run = () => console.log(parseIntegersAlt(['0', 'mmkls']));