import { URLS, RESULTS_PER_PAGE } from "./constants";

const getURL = (searchBy) => {
  switch (searchBy) {
    case "title":
      return URLS.BASE_SEARCH_BY_TITLE_URL;
    case "author":
      return URLS.BASE_SEARCH_BY_AUTHOR_URL;
    case "subject":
      return URLS.BASE_SEARCH_BY_SUBJECT_URL;
    default:
      return URLS.BASE_SEARCH_URL;
  }
};

export const search = async (searchValue, searchBy, page) => {
  try {
    let query = getURL(searchBy) + encodeURIComponent(searchValue) + `&limit=${RESULTS_PER_PAGE}`;
    if (page) {
      query += `&page=${page}`;
    }
    console.log("query", query);
    const resPromise = await fetch(query);
    const res = await resPromise.json();

    if (res.statusCode === 503) {
      throw new Error("Service Unavailable. Please try again later.");
    }

    if (res && res.docs) {
      return {
        data: formatData(res.docs),
        totalPages: Math.ceil(res.numFound / RESULTS_PER_PAGE),
      };
    }

    return null;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const getBookCoverURL = (coverId) => {
  if (coverId) {
    return `https://covers.openlibrary.org/b/id/${coverId}.jpg`;
  } else {
    return null;
  }
};

const formatData = (books) => {
  return books.map(({ cover_i, ...tail }) => ({
    coverUrl: getBookCoverURL(cover_i),
    ...tail,
  }));
};
