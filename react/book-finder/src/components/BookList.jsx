import { useState, useEffect, useMemo, useCallback, memo } from "react";
import { Grid, Typography } from "@mui/material";
import BookItem from "./BookItem";
import { STORAGE_FAVORITES_KEY } from "../api/constants";
import { useFavorite } from "../context/FavoriteContext";

const getStoredFavorites = () => {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_FAVORITES_KEY));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

const BookList = ({ books }) => {
  const [favoriteBooks, setFavoriteBooks] = useState(getStoredFavorites);
  const {showFavorites} = useFavorite();
  useEffect(() => {
    localStorage.setItem(STORAGE_FAVORITES_KEY, JSON.stringify(favoriteBooks));
  }, [favoriteBooks]);

  const toggleFavorite = useCallback((book) => {
    setFavoriteBooks((prev) => {
      const exists = prev.some((b) => b.key === book.key);
      if (exists) {
        return prev.filter((b) => b.key !== book.key);
      } else {
        const minimalBook = {
          key: book.key,
          title: book.title,
          author_name: book.author_name,
          first_publish_year: book.first_publish_year,
          coverUrl: book.coverUrl,
          isFavorite: true,
        };
        return [...prev, minimalBook];
      }
    });
  }, []);

  const favoriteKeys = useMemo(
    () => new Set(favoriteBooks.map((b) => b.key)),
    [favoriteBooks]
  );

  const booksWithFavorites = useMemo(() => {
    return books.map((book) => ({
      ...book,
      isFavorite: favoriteKeys.has(book.key),
    }));
  }, [books, favoriteKeys]);

  const booksToRender = showFavorites ? favoriteBooks : booksWithFavorites;

  return (
    <Grid
      container
      spacing={3}
      sx={{ mt: 2, alignItems: "center", justifyContent: "center" }}
    >
      {showFavorites && favoriteBooks.length === 0 && (
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
          No favorite books to display
        </Typography>
      )}
      {booksToRender.map((book) => (
        <Grid item xs={12} sm={6} key={book.key} sx={{ height: "100%" }}>
          <BookItem
            id={book.key}
            title={book.title}
            author_name={book.author_name}
            first_publish_year={book.first_publish_year}
            language={book.language}
            coverUrl={book.coverUrl}
            isFavorite={favoriteKeys.has(book.key)}
            onToggleFavorite={() => toggleFavorite(book)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(BookList);
