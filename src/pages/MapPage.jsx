import BackHomeButton from "../components/BackHomeButton";
import WeatherMap from "../components/WeatherMap";

function MapPage({ weather, setActivePage }) {
  return (
    <>
      <BackHomeButton setActivePage={setActivePage} />

      <WeatherMap
        lat={weather.coord.lat}
        lon={weather.coord.lon}
        city={weather.name}
      />
    </>
  );
}
export default MapPage;