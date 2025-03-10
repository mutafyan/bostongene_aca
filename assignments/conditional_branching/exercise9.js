/**Task
 * Given cost price and selling price. 
 * Write a code which checks profit or loss.
 */

import { validateNumber, takeUserInput, closeInput } from "../helpers.js";

const checkProfitOrLoss = (costPrice, sellingPrice) => {
    if(costPrice < sellingPrice) {
        return `Profit = ${sellingPrice - costPrice}`;
    } else if(costPrice > sellingPrice) {
        return `Loss = ${costPrice - sellingPrice}`;
    } else {
        return "No profit no loss";
    }
}

const takeInput = async () => {
    const costPrice = +await takeUserInput("Input cost price: ");
    const sellingPrice = +await takeUserInput("Input selling price: ");
    closeInput();
    if(validateNumber(costPrice) && validateNumber(sellingPrice)) {
        return { costPrice, sellingPrice };
    } else {
        console.log("Not a valid number")
        return null;
    }
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(checkProfitOrLoss(input.costPrice, input.sellingPrice));
    }
}