import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext({
  showFavorites: false,
  toggleShowFavorite: () => {},
});

export const FavoriteProvider = ({ children }) => {
  const [showFavorites, setShowFavorite] = useState(false);

  const toggleShowFavorite = () => setShowFavorite((prev) => !prev);

  return (
    <FavoriteContext.Provider value={{ showFavorites, toggleShowFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);
