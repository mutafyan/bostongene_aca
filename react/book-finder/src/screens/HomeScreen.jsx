import React, { useState, useEffect, useRef, useCallback } from "react";
import "../styles/HomeScreen.css";
import { search } from "../api/api_service";
import BookList from "../components/BookList";
import {
  Container,
  Box,
  Typography,
  Pagination,
  CircularProgress,
  Divider,
} from "@mui/material";
import AppBar from "../components/AppBar";

const HomeScreen = ({ showFavorites }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchBy, setSearchBy] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [randomTopic, setRandomTopic] = useState(null);
  const [isDebouncing, setIsDebouncing] = useState(false);
  const debounceTimeout = useRef(null);

  const hasResults = searchResult.length > 0;
  const isInitial = !searchValue.trim() && searchValue.length === 0;

  useEffect(() => {
    if (searchValue.trim()) return;

    const getRandomBooks = async () => {
      setIsLoading(true);
      const topics = ["science", "history", "fiction", "technology", "art"];
      const chosenTopic = topics[Math.floor(Math.random() * topics.length)];
      setRandomTopic(chosenTopic);
      const { data } = await search(chosenTopic, "subject");
      setSearchResult(data);
      setTotalPages(1);
      setPage(1);
      setIsLoading(false);
    };

    getRandomBooks();
  }, [searchValue]);

  const validateResponse = (response) =>
    response &&
    Array.isArray(response.data) &&
    typeof response.totalPages === "number";

  const handleSearch = useCallback(
    (value, by, debounce = false, currentPage = 1) => {
      const doSearch = async (isDebounced, pageNum) => {
        if (!value.trim()) {
          setSearchValue("");
          setSearchResult([]);
          setTotalPages(0);
          setPage(1);
          if (isDebounced) setIsDebouncing(false);
          return;
        }

        if (!isDebounced) setIsLoading(true);

        setSearchValue(value);
        setSearchBy(by);

        const response = await search(value, by, pageNum);
        if (!validateResponse(response)) {
          setSearchResult([]);
          setTotalPages(0);
          setPage(1);
        } else {
          setSearchResult(response.data);
          setTotalPages(response.totalPages);
          setPage(pageNum);
        }

        if (!isDebounced) setIsLoading(false);
        if (isDebounced) setIsDebouncing(false);
      };

      if (debounce) {
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        setIsDebouncing(true);
        debounceTimeout.current = setTimeout(
          () => doSearch(true, currentPage),
          500
        );
      } else {
        setIsDebouncing(false);
        doSearch(false, currentPage);
      }
    },
    []
  );

  useEffect(() => {
    if (!searchValue.trim()) return;
    handleSearch(searchValue, searchBy, false, page);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [page, searchValue, searchBy]);

  useEffect(
    () => () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    },
    []
  );

  return (
    <Container maxWidth="lg" className="app-container">
      <AppBar
        hasResults={hasResults}
        handleSearch={handleSearch}
        isLoading={isDebouncing || (!isInitial && isLoading)}
        isDisabled={showFavorites}
      />

      {isInitial && isLoading ? (
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : hasResults ? (
        <Box
          className="search-result"
          sx={{
            backgroundColor: "background.paper",
            boxShadow: 1,
            borderRadius: "8px",
            p: "16px",
          }}
        >
          {showFavorites ? (
            <Box sx={{ width: "100%", mb: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 1 }}>
                Your favorites
              </Typography>
              <Divider />
            </Box>
          ) : (
            isInitial && (
              <Box sx={{ width: "100%", mb: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 1 }}>
                  Explore today's topic: {randomTopic}
                </Typography>
                <Divider />
              </Box>
            )
          )}

          <BookList books={searchResult} showFavorites={showFavorites} />
          {searchValue && totalPages > 1 && (
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, value) => setPage(value)}
              color="primary"
              sx={{ my: 2 }}
            />
          )}
        </Box>
      ) : (
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <Typography variant="h6">
            No results found for "{searchValue}"
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default HomeScreen;
