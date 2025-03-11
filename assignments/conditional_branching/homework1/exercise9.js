/**Task
 * Given cost price and selling price. 
 * Write a code which checks profit or loss.
 */

import { closeInput, takeInputNaturalNumber } from "../../helpers.js";

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
    const costPrice = await takeInputNaturalNumber("Input cost price: ");
    const sellingPrice = await takeInputNaturalNumber("Input selling price: ");
    closeInput();
    if(costPrice && sellingPrice) {
        return { costPrice, sellingPrice };
    } else {
        console.log("Invalid input. Exiting...");
        return null;
    }
}

export const run = async () => {
    const input = await takeInput();
    if(input) {
        console.log(checkProfitOrLoss(input.costPrice, input.sellingPrice));
    }
}