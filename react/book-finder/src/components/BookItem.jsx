import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import defaultCover from "../assets/default_book_cover.jpg";

const BookItem = ({
  id,
  title,
  author_name = "Unknown Author",
  first_publish_year = "Unknown Year",
  language = [],
  coverUrl = null,
  isFavorite,
  onToggleFavorite,
}) => {
  const authorDisplay = Array.isArray(author_name)
    ? author_name.join(", ")
    : author_name;

  const languageDisplay = Array.isArray(language)
    ? language.join(", ")
    : language;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: { xs: "24rem", md: "16rem" },
        maxWidth: "31rem",
        width: "100%",
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        image={coverUrl || defaultCover}
        alt={`Cover of ${title}`}
        sx={{
          width: { xs: "100%", md: "12rem" },
          height: "16rem",
          objectFit: "cover",
          flexShrink: 0,
        }}
      />

      <CardContent
        sx={{
          p: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <Box sx={{ overflow: "hidden", flex: 1 }}>
          <Typography
            variant="h6"
            title={title}
            sx={{
              fontWeight: 700,
              fontSize: "1.2rem",
              mb: 0.5,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            title={authorDisplay}
            sx={{
              mb: 1,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            by{" "}
            {authorDisplay.length > 20
              ? `${authorDisplay.slice(0, 20)}...`
              : authorDisplay}
          </Typography>

          <Typography
            variant="body2"
            sx={{ fontSize: "0.875rem", mb: 1 }}
          >
            Published: {first_publish_year}
          </Typography>

          {languageDisplay && (
            <Typography
              variant="body2"
              title={languageDisplay}
              sx={{
                mb: 1,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Language:{" "}
              {languageDisplay.length > 20
                ? `${languageDisplay.slice(0, 20)}...`
                : languageDisplay}
            </Typography>
          )}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
          <IconButton
            onClick={onToggleFavorite}
            sx={{ p: 0, ml: 1, color: isFavorite ? "#f56565" : "#a0aec0" }}
          >
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookItem;
