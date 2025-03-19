/**
 * 15. What will be returned, and why?
 * (()=>()=>1)()
 */

/** 
 * firstly, the expression will be executed immediately
 * then if we are talking about the return value, it will be the function syntax () => 1, since
 * the first arrow function is returning it. Essentially it is the same as this
*/
const func = () => 1;
(() => func)()

/**which will return the same () => 1. If we add parenthesis next to func call in arrow function, 
 * it will return undefined because the func function itself it not returning anything
 */