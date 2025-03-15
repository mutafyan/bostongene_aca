/**Task
 * Given three angles of a triangle, 
 * determine if it's an acute triangle (all angles are less than 90 degrees), 
 * right triangle (one angle is exactly 90 degrees), or 
 * obtuse triangle (one angle is greater than 90 degrees).
 */
import { closeInput, takeInputNaturalNumber } from "../../helpers.js";

const classifyTriangle = (angle1, angle2, angle3) => {
    if(!validateTriangle(angle1, angle2, angle3)) return "Not a valid triangle";

    // if valid, check angles
    if(angle1 < 90 && angle2 < 90 && angle3 < 90) {
        return "Acute triangle";
    } else if(angle1 === 90 || angle2 === 90 || angle3 === 90) {
        return "Right triangle";
    } else {
        return "Obtuse triangle";
    }
}

// first check if the input angles form a valid triangle
// all angles must be positive and sum of all angles must be 180
const validateTriangle = (angle1, angle2, angle3) => {
    // false if not valid
    return (angle1 > 0 && angle2 > 0 && angle3 > 0) && (angle1 + angle2 + angle3 === 180);
}

const takeInput = async () => {
    const angle1 = await takeInputNaturalNumber("Input the first angle of a triangle: ");
    const angle2 = await takeInputNaturalNumber("Input the second angle of a triangle: ");
    const angle3 = await takeInputNaturalNumber("Input the third angle of a triangle: ");
    
    closeInput();

    if(angle1 && angle2 && angle3) {
        return { angle1, angle2, angle3 };
    } else {
        console.log("Invalid input. Exiting...");
        return null;
    }
}

export const run = async () => {    
    const input = await takeInput();
    if(input) {
        console.log(classifyTriangle(input.angle1, input.angle2, input.angle3));
    }
}