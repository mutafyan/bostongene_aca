// Write a function which calculates average age of users
const users = [ 
    { 
        username: "Yuri Gagarin", 
        lang: "ru", 
        age: 56, 
    }, 
    { 
        username: "Nil Armstrong", 
        lang: "ENG", 
        age: 54, 
    }, 
]; 

const getAverageAge = (users) => users.length === 0 ? 0 : users.reduce((sum, user)=>sum + user.age, 0) / users.length;

export const run = () => console.log(getAverageAge(users));
   