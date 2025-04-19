import { Paper, Box, Typography } from "@mui/material";
import InputForm from "./InputForm";

const SearchAppBar = ({ hasResults, handleSearch, isLoading }) => {
  return (
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
            onSearch={(val, by, deb) => handleSearch(val, by, deb)}
            isLoading={isLoading}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default SearchAppBar;
