/**
 * Write a function that gets the object and key as arguments 
 * and checks if the key exists in the object.
 */
let student = {
    name: "David Rayy",
    sclass : "VI",
    rollno : 12 
};
const hasKey = (object, key) => object.hasOwnProperty(key);

export const run = () => console.log(hasKey(student, 'name') ? "has" : "does not have");