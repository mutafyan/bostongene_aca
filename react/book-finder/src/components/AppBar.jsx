import { Paper, Box, Typography } from "@mui/material";
import InputForm from "./InputForm";
import '../styles/AppBar.css';
const AppBar = ({ hasResults, handleSearch, isLoading, isDisabled }) => {
  return (
    <Paper
      className={`search-bar-container ${hasResults ? "pinned" : ""}`}
    >
      <Box className="search-bar-content">
        <Typography variant="h4" component="h1" className="app-title">
          BookFinder
        </Typography>
        <Box className="search-controls">
          <InputForm
            onSearch={(val, by, deb) => handleSearch(val, by, deb)}
            isLoading={isLoading}
            isDisabled={isDisabled}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default AppBar;
