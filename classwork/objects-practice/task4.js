/**
 * Calculate the average of all payments
 */

import {payments} from './payments.js'
import { calculateSum } from './task2.js'

const findAverage = (payments)=> {
    if(payments.length === 0) return null;
    return  calculateSum(payments)/payments.length;
}

console.log(findAverage(payments));