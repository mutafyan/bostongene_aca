/** Task:
 * Write a code asking the user to input any season(winter, spring, summer, autumn).
 */

import { closeInput, takeUserInput } from "../helpers.js"

const printMessageForSeason = (season) => {
    if(season === "winter") {
        console.log("take warm clothes")
    } else if(season === 'autumn') {
        console.log("there are many colors outside")
    } else if(season === 'spring') {
        console.log("trees are blossoming")
    } else if(season === 'summer') {
        console.log("you can go to the beach.")
    } else {
        console.log("Sorry season does not exist.")
    }
}

export const run = async () => {
    const season = await takeUserInput("Enter a year season: ");
    closeInput();
    if(season) {
        printMessageForSeason(season);
    }
}