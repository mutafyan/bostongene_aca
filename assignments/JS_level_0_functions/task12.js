/**
 * 12. Write a Function to Check Palindrome Strings
 * Write a function called isPalindrome that takes a string as an argument
 * and returns true if the string is a palindrome (reads the same backward as forward) and false otherwise.
 */

import { closeInput, takeUserInput } from "../helpers.js";

function isPalindrome(string) {
    const reversed = string.split('').reverse().join('');
    return reversed === string;
}

export async function run() {
    const input = await takeUserInput("Enter a word to check if it is a palindrome (case-sensitive): ");
    closeInput();
    if(!input) return;
    console.log(isPalindrome(input) ? "Palindrome" : "Not palindrome");
}