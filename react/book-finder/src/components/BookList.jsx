import { useState, useEffect, useMemo, useCallback } from "react";
import { Grid } from "@mui/material";
import BookItem from "./BookItem";

const STORAGE_KEY = "favoriteKeys";

const getStoredFavorites = () => {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

const BookList = ({ books }) => {
  const [favoriteKeys, setFavoriteKeys] = useState(getStoredFavorites);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteKeys));
  }, [favoriteKeys]);

  const toggleFavorite = useCallback((key) => {
    setFavoriteKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  }, []);

  // cache result to not run on each render
  const booksWithFavorites = useMemo(() => {
    const favSet = new Set(favoriteKeys);
    return books.map((book) => ({
      ...book,
      isFavorite: favSet.has(book.key),
    }));
  }, [books, favoriteKeys]);

  return (
    <Grid
      container
      spacing={3}
      sx={{ mt: 2, alignItems: "center", justifyContent: "center" }}
    >
      {booksWithFavorites.map((book) => (
        <Grid item xs={12} sm={6} key={book.key} sx={{ height: "100%" }}>
          <BookItem
            id={book.key}
            title={book.title}
            author_name={book.author_name}
            first_publish_year={book.first_publish_year}
            language={book.language}
            coverUrl={book.coverUrl}
            isFavorite={book.isFavorite}
            onToggleFavorite={() => toggleFavorite(book.key)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
