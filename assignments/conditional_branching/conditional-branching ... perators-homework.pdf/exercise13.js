// Task: What will be the output 

// the execution order is () > ! > && > ||

true && null || true          // true
5 > 3 && 10 <= 20 || false    // true
(7 + 3 === 10) && (true || false) // true
false || true && (5 !== '5')  // true
(4 < 6 || 10 >= 15) && true // true 
(8 === 8 || 9 !== '9') && false // false
true && (null || 189) || false  // true
(3 === 3 || NaN) && (true && true) // true
true || (7 < 5 && 10 >= 11)  // true
(20 <= 20 && 3 > 1) || (false && true) // true
(9 >= 10 || 15 < 20) && (12 || false) // true 
(5 + 5 == '10') && (89 || null) // true
true && (false || true) || false // true
(6 == '6' && true) || (false && true) // true
(10 < 5 || 20 >= 15) && true // true
(3 === '3' && 567) || (undefined || (5 > 10 && (20 <= 30 || true))) // false
((5 === 5 || false) && (true && (10 !== 20 || (30 >= 40 && false))))  // true

(true || (false && (true || (10 === 5 && (20 > 15 || false))))) && (3 < 5 || 0) // true
((7 >= 5 && true) || (false || (10 === 10 && (20 < 15 || true)))) && (false || true) // true
((true || (false && (true || (5 !== 5 && (10 > 15 || false))))) && 
    (3 <= 5 || false)) || (true && (false || (3 > 1 && (true || false)))) // true
