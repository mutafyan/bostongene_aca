import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import "../styles/InputForm.css";

const InputForm = ({ onSearch, isLoading = false }) => {
  const [searchBy, setSearchBy] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleSearchByChange = (e) => {
    setSearchBy(e.target.value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (!value.trim() && value.length > 0) {
      setError(true);
    } else {
      if (error) setError(false);
      onSearch(value, searchBy, true);
    }
  };

  const handleSubmit = () => {
    if (!inputValue.trim() && inputValue.length > 0) {
      setError(true);
      return;
    }
    onSearch(inputValue, searchBy, false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <FormControl
      error={error}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
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
        sx={{ minWidth: 100 }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="author">Author</MenuItem>
        <MenuItem value="subject">Subject</MenuItem>
      </Select>

      <TextField
        sx={{ justifySelf: "center" }}
        size="small"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search here..."
        error={error}
        helperText={error ? "Please enter a valid input" : ""}
      />

      <Button variant="contained" onClick={handleSubmit}>
        {isLoading ? <CircularProgress size={24} color="inherit" /> : "Search"}
      </Button>
    </FormControl>
  );
};

export default InputForm;
