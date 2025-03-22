// Write a function which filters object by field.
const users = [ 
    { 
        username: "Yuri Gagarin", 
        lang: "ru", 
        isAstronaut: true, 
    }, 
    { 
        username: "Nil Armstrong", 
        lang: "ENG", 
        isAstronaut: true, 
    }, 
    { 
        username: "Elon Musk", 
        isAstronaut: false, 
    }, 
]; 

const filterUsersByField = (users, field) => users.filter((user)=>user[field] ??= false);

export const run = () => console.log(filterUsersByField(users, 'isAstronaut'));