/**
 * 5. Create a new array consisting only of company names (as strings)
 */

import { users } from "./users.js";

// converting to set and then back to array by spreading the set values guarantees unique names in the array
const getCompanyNames = (users) => Array(...new Set(users.map((user)=>user.company)));

export const run = () => {
    console.log(getCompanyNames(users));
}