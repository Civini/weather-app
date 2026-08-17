export function getWeatherIcon(condition) {
  switch (condition.toLowerCase()) {
    case "clear":
      return "☀️";

    case "clouds":
      return "☁️";

    case "rain":
      return "🌧️";

    case "drizzle":
      return "🌦️";

    case "thunderstorm":
      return "⛈️";

    case "snow":
      return "❄️";

    case "mist":
    case "fog":
    case "haze":
      return "🌫️";

    default:
      return "🌍";
  }
}