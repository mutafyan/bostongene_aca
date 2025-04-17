import { useEffect, useState } from "react";
import "./App.css";
import { search } from "./api/api_service";
import BookList from "./components/BookList";
import {
  Button,
  Container,
  Box,  
  Paper,
  Typography,
} from "@mui/material";
import InputForm from "./components/InputForm";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const hasResults = searchResult.length > 0;

  const handleSearch = async (searchValue, searchBy) => {
    if (!searchValue) return;
    const result = await search(searchValue.toLowerCase(), searchBy);
    setSearchResult(result);
  };


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
            <InputForm onSearch={handleSearch} />
          </Box>
        </Box>
      </Paper>
      {hasResults && <Box className="search-result">
        <BookList books={searchResult} />
      </Box>}
    </Container>
  );
}

export default App;
