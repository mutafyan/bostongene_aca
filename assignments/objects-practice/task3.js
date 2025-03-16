/**
 * Find the count of all payments that are more than 1500
 */
import {payments} from './payments.js'

console.log(findCount(payments, 1500));

const findCount = (payments, minValue) => {
    let count = 0;
    for(const payment of payments) {
        if(payment.payedAmount > minValue) count++;
    }
    return count;
}