import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  Typography
} from "@mui/material";
import { useState, useRef } from "react";
import "../styles/InputForm.css";

const InputForm = ({ onSearch, isLoading=false }) => {
  const [searchBy, setSearchBy] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  const handleSearchByChange = (e) => {
    setSearchBy(e.target.value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    onSearch(value, searchBy, true); // pass true for debouncing
  };

  const handleSubmit = () => {
    if (searchValue.trim()) {
      onSearch(searchValue, searchBy);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

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
        sx={{ minWidth: 80 }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="author">Author</MenuItem>
        <MenuItem value="subject">Subject</MenuItem>
      </Select>

      <TextField
        size="small"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search here..."
        className="search-input"
        onKeyDown={handleKeyDown}
      />

      <Button variant="contained" onClick={handleSubmit}>
        {isLoading ? <CircularProgress size={24} color="white"/> : 'Search' }
      </Button>
    </FormControl>
  );
};

export default InputForm;
