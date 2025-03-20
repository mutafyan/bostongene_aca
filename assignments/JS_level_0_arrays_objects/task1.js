/**
 * Write a JavaScript program to list the properties of a JavaScript object.
 */

// Sample object:
let student = {
    name: "David Rayy",
    sclass : "VI",
    rollno : 12 
};

const listProperties = (obj) => Object.keys(obj);

export const run = () => {
    console.log(listProperties(student));
}
