/**
 * Calculate the total sum of payment amounts made by each
 * student. We need to return an array that contains a list of
 * information about students, including the total paid amount by the
 * student.
 */

import {payments} from './payments.js'

const getPayersReduce = (payments) => {
    const result = Object.values(
        payments.reduce((acc, item) => {
            if (!acc[item.studentId]) {
              acc[item.studentId] = { ...item };
            } else {
              acc[item.studentId].payedAmount += item.payedAmount;
            }
            return acc;
        }, {})
    );

    return result;
}

const getPayers = (payments) => {
    let container = {};
    for(const payment of payments) {
        if(container[payment.studentId]) { // is defined
            container[payment.studentId].totalAmount += payment.payedAmount;
        } else {
            container[payment.studentId] = {
                studentId: payment.studentId,
                studentName: payment.studentName,
                totalAmount: payment.payedAmount ?? 0,
            }
        }
    }
    return Object.values(container);
}
console.log(getPayers(payments));
