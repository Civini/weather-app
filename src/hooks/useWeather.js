import { useState } from "react";

import {
  fetchWeather,
  fetchForecast,
  fetchAQI,
  fetchWeatherByLocation,
  fetchForecastByLocation,
} from "../services/weatherApi";

import { buildHourlyForecast } from "../utils/forecastHelper";

function useWeather() {
  const [weather, setWeather] = useState(null);

  const [forecast, setForecast] = useState([]);

  const [hourly, setHourly] = useState([]);
  const [aqi, setAqi] = useState(null);
  const [loading, setLoading] = useState(false);
  const getWeather = async (city) => {
    if (!city || !city.trim()) {
      return;
    }

    try {
      setLoading(true);

      
      const weatherData = await fetchWeather(city.trim());

      if (!weatherData || Number(weatherData.cod) !== 200) {
        alert("City not found.");

        setWeather(null);
        setForecast([]);
        setHourly([]);
        setAqi(null);

        return;
      }

      setWeather(weatherData);
      try {
        const airData = await fetchAQI(
          weatherData.coord.lat,
          weatherData.coord.lon
        );

        if (
          airData &&
          Array.isArray(airData.list) &&
          airData.list.length > 0
        ) {
          setAqi(airData.list[0].main.aqi);
        } else {
          setAqi(null);
        }
      } catch (error) {
        console.error("AQI error:", error);
        setAqi(null);
      }
      const forecastData = await fetchForecast(city.trim());
      console.log("FORECAST API RESPONSE:", forecastData);

      if (
        forecastData &&
        Array.isArray(forecastData.list)
      ) {
        setForecast(forecastData.list);
        setHourly(
          buildHourlyForecast(forecastData.list)
        );
      } else {
        console.error(
          "Invalid forecast response:",
          forecastData
        );

        setForecast([]);
        setHourly([]);
      }
    } catch (error) {
      console.error("getWeather error:", error);

      setWeather(null);
      setForecast([]);
      setHourly([]);
      setAqi(null);

      alert("Unable to load weather data.");
    } finally {
      setLoading(false);
    }
  };
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          setLoading(true);
          const weatherData =
            await fetchWeatherByLocation(
              latitude,
              longitude
            );

          if (
            !weatherData ||
            Number(weatherData.cod) !== 200
          ) {
            alert("Unable to fetch current weather.");
            return;
          }

          setWeather(weatherData);
          try {
            const airData = await fetchAQI(
              latitude,
              longitude
            );

            if (
              airData &&
              Array.isArray(airData.list) &&
              airData.list.length > 0
            ) {
              setAqi(airData.list[0].main.aqi);
            } else {
              setAqi(null);
            }
          } catch (error) {
            console.error("Location AQI error:", error);
            setAqi(null);
          }
          const forecastData =
            await fetchForecastByLocation(
              latitude,
              longitude
            );

          console.log(
            "LOCATION FORECAST:",
            forecastData
          );

          if (
            forecastData &&
            Array.isArray(forecastData.list)
          ) {
            setForecast(forecastData.list);

            setHourly(
              buildHourlyForecast(
                forecastData.list
              )
            );
          } else {
            setForecast([]);
            setHourly([]);
          }
        } catch (error) {
          console.error(
            "getCurrentLocation error:",
            error
          );

          alert(
            "Unable to load weather for your location."
          );
        } finally {
          setLoading(false);
        }
      },

      (error) => {
        console.error(
          "Geolocation error:",
          error
        );

        alert(
          "Location permission denied. Please allow location access."
        );
      }
    );
  };
  return {
    weather,
    forecast,
    hourly,
    aqi,
    loading,
    getWeather,
    getCurrentLocation,
  };
}
export default useWeather;