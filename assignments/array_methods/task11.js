/** Create a function that takes an array of numbers arr, 
 * a string str and return an array of numbers as per the following rules: 
 - "Asc" returns a sorted array in ascending order. 
 - "Desc" returns a sorted array in descending order.
 */

const sortBy = (arr, type) => {
    if(type === 'Asc') {
        return arr.sort((a, b)=> a - b);
    } else if (type === 'Desc') {
        return arr.sort((a, b)=> a - b).reverse();
    } else {
        console.log("Not valid type. Exiting...");
        return arr;
    }
} 

export const run = () => console.log(sortBy([7, 8, 11, 66]));