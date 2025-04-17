import { URLS } from "./constants";

const getURL = (searchBy) => {
    switch (searchBy) {
        case 'title':
            return URLS.BASE_SEARCH_BY_TITLE_URL;
        case 'author':
            return URLS.BASE_SEARCH_BY_AUTHOR_URL;
        case 'subject':
            return URLS.BASE_SEARCH_BY_SUBJECT_URL;
        default:
            return URLS.BASE_SEARCH_URL;
    }
}

export const search = async (searchValue, searchBy) => {
    try {
        const resPromise = await fetch(`${getURL(searchBy)}${searchValue.replace(' ', '+')}`);
        const res = await resPromise.json();
        if(res) return res.docs;        
    } catch (err) {
        console.log(err.message);
    }
}