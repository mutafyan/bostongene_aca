import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import { search } from "./api/api_service";
import BookList from "./components/BookList";
import {
  Container,
  Box,
  Paper,
  Typography,
  Pagination,
  CircularProgress,
  Divider,
} from "@mui/material";
import InputForm from "./components/InputForm";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchBy, setSearchBy] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [randomTopic, setRandomTopic] = useState(null);
  const debounceTimeout = useRef(null);

  const hasResults = searchResult.length > 0;
  const isInitial = !searchValue.trim();

  // get random books on initial load or when searchValue is cleared
  useEffect(() => {
    if (searchValue.trim()) return;

    const getRandomBooks = async () => {
      setIsLoading(true);
      const topics = ["science", "history", "fiction", "technology", "art"];
      const chosenTopic = topics[Math.floor(Math.random() * topics.length)];
      setRandomTopic(chosenTopic);
      const { data } = await search(chosenTopic, "subject");
      console.log("got random books for topic", chosenTopic);
      setSearchResult(data);
      setTotalPages(1);
      setPage(1);
      setIsLoading(false);
    };

    getRandomBooks();
  }, [searchValue]);

  const handleSearch = useCallback(
    (value, by, isDebouncing = false, currentPage = 1) => {
      const doSearch = async () => {
        if (!value.trim()) {
          setSearchValue(""); // will trigger  useEffect to get random books
          setSearchResult([]);
          setTotalPages(0);
          setPage(1);
          return;
        }

        setIsLoading(true);
        setSearchValue(value);
        setSearchBy(by);

        const response = await search(value, by, currentPage);
        if (!validateResponse(response)) {
          setSearchResult([]);
          setTotalPages(0);
          setPage(1);
          setIsLoading(false);
          return;
        }

        const { data, totalPages } = response;
        setSearchResult(data);
        setTotalPages(totalPages);
        setPage(currentPage);
        setIsLoading(false);
      };

      if (isDebouncing) {
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        debounceTimeout.current = setTimeout(doSearch, 500);
      } else {
        doSearch();
      }
    },
    []
  );

  const validateResponse = (response) =>
    !!(response && response.data && response.totalPages);

  useEffect(() => {
    if (!searchValue.trim()) return;
    handleSearch(searchValue, searchBy, false, page);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [page]);

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  return (
    <Container maxWidth="lg" className="app-container">
      <Paper
        className={`search-bar-container ${hasResults ? "pinned" : ""}`}
        sx={{ backgroundColor: "hsl(41.2, 47.1%, 97.3%)" }}
      >
        <Box className="search-bar-content">
          <Typography variant="h4" component="h1" className="app-title">
            BookFinder
          </Typography>
          <Box className="search-controls">
            <InputForm
              onSearch={(val, by, isDebouncing) =>
                handleSearch(val, by, isDebouncing)
              }
              isLoading={!isInitial && isLoading}
            />
          </Box>
        </Box>
      </Paper>

      {isInitial && isLoading ? (
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : hasResults ? (
        <Box className="search-result">
          {isInitial && (
            <Box sx={{ width: "100%", mb: 2 }}>
              <Typography
                variant="h5"
                component="h5"
                sx={{ fontWeight: "500", mb: 1 }}
              >
                Explore today's topic: {randomTopic}
              </Typography>
              <Divider />
            </Box>
          )}

          <BookList books={searchResult} />
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
          <Typography variant="h6" component="p">
            No results found for "{searchValue}"
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default App;
