import { useEffect, useState } from "react";
import "./App.css";
import { search } from "./api/api_service";
import BookList from "./components/BookList";
import {
  Button,
  TextField,
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchBy, setSearchBy] = useState("all");
  const hasResults = searchResult.length > 0;

  const handleSearch = async () => {
    if (!searchValue) return;
    const result = await search(searchValue.toLowerCase(), searchBy);
    setSearchResult(result);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchValue, searchBy]);


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
            <FormControl className="form-control" sx={{ width: 105 }} fullWidth size="small">
              <InputLabel id="search-by-label">Search by</InputLabel>
              <Select
                labelId="search-by-label"
                value={searchBy}
                label="Search by"
                onChange={(e) => setSearchBy(e.target.value)}
                sx={{minWidth: 80, width: 'fit-content'}}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="title">Title</MenuItem>
                <MenuItem value="author">Author</MenuItem>
                <MenuItem value="subject">Subject</MenuItem>
              </Select>
            </FormControl>

            <TextField
              size="small"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search here..."
              className="search-input"
            />

            <Button variant="contained" onClick={handleSearch}>
              SEARCH
            </Button>
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
