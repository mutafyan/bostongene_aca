import React, { useMemo, useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import HomeScreen from "./screens/HomeScreen";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import FavoriteIcon from "@mui/icons-material/Favorite";

const App = () => {
  const [mode, setMode] = useState("light");
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleDarkMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  const toggleFavorites = () => setShowFavorites((prev) => !prev);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#D2A679",
          },
          secondary: {
            main: "#A0522D",
          },
          background: {
            default: mode === "light" ? "#e1dcc5" : "#121212",
            paper: mode === "light" ? "#f7f7ed" : "#1d1d1d",
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          display: "flex",
          gap: 1,
          zIndex: theme.zIndex.appBar + 1,
        }}
      >
        <Tooltip title="Show favorites">
          <IconButton
            onClick={toggleFavorites}
            color="inherit"
            about="Show favorites"
          >
            <FavoriteIcon color={showFavorites ? "error" : "inherit"} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Toggle theme mode">
          <IconButton onClick={toggleDarkMode} color="inherit">
            {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Tooltip>
      </Box>
      <HomeScreen showFavorites={showFavorites} />
    </ThemeProvider>
  );
};

export default App;
