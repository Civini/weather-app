import WeatherHero from "../components/dashboard/WeatherHero";
import WeatherHighlights from "../components/WeatherHighlights";
import QuickMenu from "../components/QuickMenu";

function HomePage({
  weather,
  addFavorite,
  setActivePage,
}) {
  return (
    <div className="space-y-6 p-4">

      <WeatherHero
        weather={weather}
        addFavorite={addFavorite}
      />

      <WeatherHighlights
        weather={weather}
      />

      <QuickMenu
        setActivePage={setActivePage}
      />

    </div>
  );
}

export default HomePage;