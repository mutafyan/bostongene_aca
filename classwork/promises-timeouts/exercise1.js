import {data} from './data.js';

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

const getPromise = (data) => {
    console.log("Loading...")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data);
        }, getRandomBetween(500, 1000));
    })
}


getPromise(data).then((data)=>console.log(data.filter((object)=>object.completed)));