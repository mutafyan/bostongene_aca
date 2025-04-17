import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import "../styles/InputForm.css";
const InputForm = ({ onSearch }) => {
  const [searchBy, setSearchBy] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  const handleSearchByChange = (e) => {
    setSearchBy(e.target.value);
  };

  const handleSearch = () => {
    if (!searchValue.trim()) return;
    onSearch(searchValue, searchBy);
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
    <FormControl
      className="form-control"
      sx={{
        minWidth: "fit-content",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
      }}
      fullWidth
      size="small"
    >
      <InputLabel id="search-by-label">Search by</InputLabel>
      <Select
        labelId="search-by-label"
        value={searchBy}
        label="Search by"
        onChange={handleSearchByChange}
        sx={{ minWidth: 80, width: "fit-content" }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="author">Author</MenuItem>
        <MenuItem value="subject">Subject</MenuItem>
      </Select>

      <TextField
        size="small"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search here..."
        className="search-input"
      />

      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </FormControl>
  );
};

export default InputForm;
