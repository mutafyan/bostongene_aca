/**
 * Calculate the sum of all payments
 */
import {payments} from './payments.js'


export function calculateSum (payments) {
    let sum = 0;
    for(const payment of payments) {
        sum += payment.payedAmount
    }
    return sum;
}
function printResult (){
    console.log(calculateSum(payments));
}