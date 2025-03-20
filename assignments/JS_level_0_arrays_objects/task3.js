/** Write a JavaScript program to get the length of a JavaScript object */

let student = {
    name: "David Rayy",
    sclass : "VI",
    rollno : 12 
};

const getObjectSize = (object) => Object.keys(object).length;

export const run = () => {
    console.log(getObjectSize(student));
}