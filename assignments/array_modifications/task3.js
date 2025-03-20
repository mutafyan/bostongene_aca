/** 3. Calculate the count of the users with blue eyes. */
import {users} from './users.js';

const countUsersByEyeColor = (users, color) => users.reduce((count, user)=> user.eyeColor === color ? count + 1 : count, 0); 

export const run = () => {
    console.log(countUsersByEyeColor(users, 'blue'));
}