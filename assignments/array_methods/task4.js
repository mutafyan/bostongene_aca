/** Write a function which returns array of usernames. 
 * which returns array of lengths of user names 
 */

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
   
const getUserNames = (users) => users.map((user)=>user.username);
const getUserNameLengths = (usernames) => usernames.map((username) => username.length);

export const run = () => {
    console.log(getUserNames(users));
    console.log(getUserNameLengths(getUserNames(users)));
}