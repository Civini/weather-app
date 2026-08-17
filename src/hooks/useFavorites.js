import { useState } from "react";

export default function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const addFavorite = (city) => {
    if (!city) return;

    if (favorites.includes(city)) {
      alert("City already added.");
      return;
    }

    const updated = [...favorites, city];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const removeFavorite = (city) => {
    const updated = favorites.filter((item) => item !== city);

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
  };
}