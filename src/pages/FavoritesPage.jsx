import BackHomeButton from "../components/BackHomeButton";
import FavoriteCities from "../components/FavoriteCities";

function FavoritesPage({
  favorites,
  getWeather,
  removeFavorite,
  setActivePage,
}) {
  return (
    <>
      <BackHomeButton setActivePage={setActivePage} />

      <FavoriteCities
        favorites={favorites}
        getWeather={getWeather}
        removeFavorite={removeFavorite}
      />
    </>
  );
}

export default FavoritesPage;