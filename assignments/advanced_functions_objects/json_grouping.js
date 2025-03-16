/** 
 * Group posts by user id from json
 */

import {data} from './data.js';

const groupUserPosts = (data) => {
    let result = {};
    for(const item of data) {
        if(result[item.userId]) {
            result[item.userId].push(item);
        } else {
            result[item.userId] = [item];
        }
    }
    return result;
}

console.log(groupUserPosts(data));
