/**
 * 2. Create a new array consisting only of the users' names and emails.
 */

import {users} from './users.js';

const getUsersNameEmail = (users) => users.map((user)=>({name: user.name, email: user.email}));

export const run = () => {
    console.log(getUsersNameEmail(users));
}