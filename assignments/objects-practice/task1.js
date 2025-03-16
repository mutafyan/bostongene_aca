/**
 * Find the max payment
 */

import {payments} from './payments.js'

function maxPayment(payments) {
    let max = payments[0].payedAmount
    for(let payment of payments) {
        if(payment.payedAmount > max)  {
            max = payment.payedAmount;
        }
    }
    return max;
}

console.log(maxPayment(payments));