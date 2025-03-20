/** 4. Find the richest user in the list */
import {users} from './users.js';

const getBalance = (balanceStr) => parseFloat(balanceStr.replace(/[^0-9.]/g, '')); // removes everything except digits and dots(.)

const getRichest = (users) => users.reduce(
    (richest, user) => getBalance(user.balance) > getBalance(richest.balance) ? user : richest, 
    users[0]
);

console.log(getRichest(users));