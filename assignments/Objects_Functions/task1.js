/** 
 * Create a function called carFactory that takes car brand, model, and year 
 * as arguments and returns an object with the passed values. 
 * 
*/

function carFactory (brand, model, year) {
    return {brand, model, year};
}

console.log(carFactory("Lexus", "LS", 2008));