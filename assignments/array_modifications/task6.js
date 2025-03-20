/**
 * 6. Add user5 in the user's document to the beginning of the user's array
 */

import { users } from "./users.js";

const user5 =   {
    "_id": "652fc67d92a11e2882df913da3",
    "isActive": true,
    "balance": "$1,416.67",
    "age": 30,
    "eyeColor": "blue",
    "name": "Hughes Finn",
    "gender": "male",
    "company": "BULLZONE",
    "email": "hughesfinn@bullzone.com"
};

const pushUserToFront = (newUser, users) => {
    users.unshift(newUser); // modifies the original array, as the task wants
    return users;
}

export const run = () => {
    console.log(pushUserToFront(user5, users));
}