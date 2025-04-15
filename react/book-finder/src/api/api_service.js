import { BASE_SEARCH_URL } from "./constants";

export const search = async (searchValue) => {
    try {
        const resPromise = await fetch(`${BASE_SEARCH_URL}${searchValue.replace(' ', '+')}`);
        const res = await resPromise.json();
        if(res) return res.docs;        
    } catch (err) {
        console.log(err.message);
    }
}