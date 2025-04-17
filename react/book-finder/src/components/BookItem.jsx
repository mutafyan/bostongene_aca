import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../styles/BookItem.css";
import defaultCover from "../assets/default_book_cover.jpg";

const BookItem = ({
  title,
  author_name = "Unknown Author",
  first_publish_year = "Unknown Year",
  language = [],
  coverUrl = null,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const authorDisplay = Array.isArray(author_name)
    ? author_name.join(", ")
    : author_name;

  return (
    <div className="book-container">
      <div className="book-cover">
        <img
          src={coverUrl || defaultCover}
          alt={`Cover of ${title}`}
          className="cover-image"
        />
      </div>

      {/* Book Details */}
      <div className="book-details">
        <div className="book-header">
          <div className="book-info">
            <h2 className="book-title text-ellipsis" title={title}>
              {title}
            </h2>
            <p className="book-author text-ellipsis" title={authorDisplay}>
              by {authorDisplay}
            </p>
            <p className="book-year">Published: {first_publish_year}</p>

            {language && language.length > 0 && (
              <p
                className="book-language text-ellipsis"
                title={Array.isArray(language) ? language.join(", ") : language}
              >
                Language:{" "}
                {Array.isArray(language) ? language.join(", ") : language}
              </p>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className="favorite-button"
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <FavoriteIcon
              className={isFavorite ? "heart-icon favorite" : "heart-icon"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
