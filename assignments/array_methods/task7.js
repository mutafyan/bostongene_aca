// Write a function which remove users with language equals to 'ru'. 

const users = [ 
    { 
        username: "Yuri Gagarin", 
        lang: "ru", 
    }, 
    { 
        username: "Nil Armstrong", 
        lang: "ENG", 
    }, 
];

const filterRemoveUsersLang = (users, lang) => users.filter((user)=>user.lang !== lang);

export const run = () => console.log(filterRemoveUsersLang(users, 'ru'))
   