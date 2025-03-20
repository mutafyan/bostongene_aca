/**
 * Write a JavaScript program to delete the rollno property from the following object.
 */

// Sample object:
let student = {
    name: "David Rayy",
    sclass : "VI",
    rollno : 12 
};

function deleteProperty(obj, property) {
    if(obj[property]) {
        delete obj[property];
        return `Property ${property} deleted`;
    } else {
        return `Property ${property} not found`;
    }
}


export const run = () => {
    console.log(student);
    console.log(deleteProperty(student, 'rollno'));
    console.log(student);
}
