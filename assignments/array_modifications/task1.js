/**
 * 1. Filter females from the array, whose age is below 30 (output should be an array).
 */

import {users} from './users.js';

const filterGenderAge = (users, gender, age) => users.filter((user)=>user.gender === gender && user.age <= age);

export const run = () => {
    console.log(filterGenderAge(users, 'female', 30));
}
