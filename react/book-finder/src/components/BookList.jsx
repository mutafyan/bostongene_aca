import { useState, useEffect, useMemo, useCallback, memo } from "react";
import { Grid } from "@mui/material";
import BookItem from "./BookItem";
import { getBooksByKeys } from "../api/api_service";
import { STORAGE_KEY } from "../api/constants";

const getStoredFavorites = () => {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

const BookList = ({ books, showFavorites }) => {
  const [favoriteKeys, setFavoriteKeys] = useState(getStoredFavorites);
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteKeys));
  }, [favoriteKeys]);

  useEffect(() => {
    const loadFavorites = async () => {
      const data = await getBooksByKeys(favoriteKeys);
      setFavoriteBooks(data);
    };

    if (showFavorites && favoriteKeys.length > 0) {
      loadFavorites();
    }
  }, [favoriteKeys, showFavorites]);

  const toggleFavorite = useCallback((key) => {
    setFavoriteKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  }, []);

  const booksWithFavorites = useMemo(() => {
    const favSet = new Set(favoriteKeys);
    return books.map((book) => ({
      ...book,
      isFavorite: favSet.has(book.key),
    }));
  }, [books, favoriteKeys]);

  const booksToRender = showFavorites ? favoriteBooks : booksWithFavorites;

  return (
    <Grid
      container
      spacing={3}
      sx={{ mt: 2, alignItems: "center", justifyContent: "center" }}
    >
      {booksToRender.map((book) => (
        <Grid item xs={12} sm={6} key={book.key} sx={{ height: "100%" }}>
          <BookItem
            id={book.key}
            title={book.title}
            author_name={book.author_name}
            first_publish_year={book.first_publish_year}
            language={book.language}
            coverUrl={book.coverUrl}
            isFavorite={favoriteKeys.includes(book.key)}
            onToggleFavorite={() => toggleFavorite(book.key)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(BookList);
