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

export const search = async (searchValue, searchBy = "all", page = 1) => {
  const url = `${getURL(searchBy)}${encodeURIComponent(
    searchValue
  )}&limit=${RESULTS_PER_PAGE}&page=${page}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`OpenLibrary error: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();

    if (!json.docs || !Array.isArray(json.docs)) {
      return { data: [], totalPages: 0 };
    }

    const data = formatData(json.docs);

    const totalPages = Math.ceil(json.numFound / RESULTS_PER_PAGE);
    return { data, totalPages };
  } catch (err) {
    console.error("Search error:", err);
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


// not used but useful
export const getBooksByKeys = async (keys = []) => {
  return await Promise.all(
    keys.map((key) => getBookByKey(key))
  );
};

const getBookByKey = async (key) => {
  try {
    const res = await fetch(`https://openlibrary.org${key}.json`); // key looks like /works/OLW6787W
    const json = await res.json();

    if (!res.ok) {
      throw new Error(`OpenLibrary error: ${res.status} ${res.statusText}`);
    }
    console.log(json);
    return json;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};


