import sunnyDay from "../assets/videos/sunny-day.mp4";
import sunnyNight from "../assets/videos/sunny-night.mp4";

import cloudyDay from "../assets/videos/cloudy-day.mp4";
import cloudyNight from "../assets/videos/cloudy-night.mp4";

import rainDay from "../assets/videos/rain-day.mp4";
import rainNight from "../assets/videos/rain-night.mp4";

import thunderVideo from "../assets/videos/thunder.mp4";
import snowVideo from "../assets/videos/snow.mp4";

export function getBackgroundVideo(weather) {
  if (!weather) return sunnyDay;

  const current = weather.dt;
  const sunrise = weather.sys.sunrise;
  const sunset = weather.sys.sunset;

  const day = current >= sunrise && current < sunset;

  switch (weather.weather[0].main) {
    case "Clear":
      return day ? sunnyDay : sunnyNight;

    case "Clouds":
      return day ? cloudyDay : cloudyNight;

    case "Rain":
    case "Drizzle":
      return day ? rainDay : rainNight;

    case "Thunderstorm":
      return thunderVideo;

    case "Snow":
      return snowVideo;

    default:
      return sunnyDay;
  }
}