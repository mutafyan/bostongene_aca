/**
 * Implement these array methods 
 * unshift [done]
 * shift [done]
 * pop [done]
 * push [done]
 * forEach [done]
 * findIndex [done]
 * find [done]
 * every [done]
 * some [done]
 * map [done]
 * filter [done]
 * reduce [done]
 * slice [done]
 * splice [done] 
 * flat [done]
 */

const unshift = (arr, ...items) => {
    const length = arr.length;
    // shift elements to the right from last to first
    for(let i = length - 1; i >=0; i--) {
        arr[i + items.length] = arr[i];
    }

    // set the items from the start of the array
    for(let i = 0; i < items.length; i++) {
        arr[i] = items[i];
    }
    
    // return length as the unshift method does
    return arr.length;
}


const shift = (arr) => {
    let item = arr[0];
    // shift elements to the start
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.length = arr.length - 1; // remove the last element (make the list shorter)
    return item;
}

const pop = (arr) => {
    const item = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return item;
}

// [1, 2, 3] items[0]  items[1]
//          ^3        ^4
const push = (arr, ...items) => {
    const length = arr.length;
    for(let i = 0; i < items.length; i++ ) {
        arr[length + i] = items[i];
    }
    return arr;
}


const forEach = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

const findIndex = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) return i;
    }
    return -1;
}

const find = (arr, callback) => {
    let index = findIndex(arr, callback);
    return arr[index]; // will return undefined if index is -1
}


const every = (arr, conditionFunc) => {
    let isTrue = true;
    for(let i = 0; i < arr.length; i++) {
        if(!conditionFunc(arr[i], i, arr)) {
            isTrue = false;
        }
    }
    return isTrue;
}

const some = (arr, conditionFunc) => {
    let isTrue = false;
    for(let i = 0; i < arr.length; i++) {
        if(conditionFunc(arr[i], i, arr)) {
            isTrue = true;
        }
    }
    return isTrue;
}


const map = (arr, callback) => {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i], i, arr);
    }

    return result;
}

const filter = (arr, callback) => {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) result.push(arr[i]);
    }
    return result;
}


const reduce = (arr, callback, initialValue = 0) => {
    let result = initialValue;
    for(let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr);
    }
    return result;
}

const slice = (arr, start = 0, end = arr.length) => {
    if (start < 0) {
        start = arr.length + start; // length - |start|
    }
    if (end < 0) {
        end = arr.length + end; // length - |end|
    }

    // Make sure start and end are within 0 and arr.length
    start = Math.max(0, Math.min(start, arr.length));
    end = Math.max(0, Math.min(end, arr.length));

    const result = [];
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    
    return result;
}


const splice = (arr, start, deleteCount, ...items) =>{
    if (start < 0) {
        start = arr.length + start;
    }
    start = Math.max(0, Math.min(start, arr.length));

    // if delete count not specified set to delete until the end
    if (deleteCount === undefined) {
        deleteCount = arr.length - start;
    }
    
    // limit deleteCount to the number of elements remaining from start
    deleteCount = Math.max(0, Math.min(deleteCount, arr.length - start));

    const removedItems = [];

    for (let i = 0; i < deleteCount; i++) {
        removedItems.push(arr[start + i]);
    }

    // shift the remaining elements to the left
    for (let i = start + deleteCount; i < arr.length; i++) {
        arr[i - deleteCount] = arr[i];
    }

    // make the list shorter
    arr.length -= deleteCount;

    // insert the new items at the start index
    for (let i = 0; i < items.length; i++) {
        arr[start + i] = items[i];
    }

    return removedItems;
};

// [1, 2, 3, [4, 5, [6, 7, [8, 9]]]] -> concat([6, 7], [8, 9]) -> concat([4, 5], [6, 7, 8, 9]) -> ...
const flat = (arr, depth = 1) => {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i]) && depth > 0 ){
            result = result.concat(flat(arr[i], depth - 1));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
};

export const run = () => console.log(flat([1, 2, 3, [4, 5, [6, 7, [8, 9]]]], 2));
