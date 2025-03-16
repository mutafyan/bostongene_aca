/** Task:
 * What will be the output and why
 */
{
    // let var = 3; // syntax error, cannot use language reserved keywords as variable names
    // var++;
}


{
    // let userName = 'sirun axjik';
    // console.log(username); // reference error username not defined , js is case sensitive
}

{
    // const USER_TYPE = 'admin';
    // USER_TYPE = 'regular'; // type error, cannot reassign const variables
}

{
    // let 3name = 'hehe'; // syntax error, a variable name cannot start with a number
    // console.log(name); 
}

{
    2 === 3 || 2 === '2' || 2 == '2'; // true because 2 == '2' is not checking 
    // the type and  true || (or) false returns true 
}

{
    1 && !null - undefined || 4;  // NaN or true returns true, but since
    // && executes first, then 4 is the latest item in || chain, 4 is returned, not true
}

{
    3 < 3 < 2 || !('2' + 1/NaN) // 3 < 3 < 2 evaluates from left to right so 3 < 3 returns false, 
    // which is converted to 0 when comparing with 2 so 0 < 2 equals true
    // 1/NaN is a NaN so '2' + NaN returns '2NaN', 
    // which as a boolean is true, so !true will return false
    // so true || false returns true
}

{
    !typeof typeof 1 || 5 === '5' || 'krecir' // first one returns !"string" which is !true == false
    // 5 === '5' is false because we compare the types too so the last value is returned => 'krecir'
}

{
    // 'help' && typof (null  + undefined) && !3 // error because typof is not defined
}

{
    // !1%4/2 || tyepof false // error since tyepof is not defined
}