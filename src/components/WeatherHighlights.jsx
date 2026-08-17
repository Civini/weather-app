import {
  Droplets,
  Wind,
  Gauge,
  Eye,
  Sunrise,
  Sunset,
} from "lucide-react";

import { useSettings } from "../context/SettingsContext";

function WeatherHighlights({ weather }) {
  const { t } = useSettings();

  if (!weather) return null;

  const cards = [
    {
      id: "humidity",
      title: t("humidity"),
      value: `${weather.main.humidity}%`,
      icon: <Droplets size={28} />,
    },
    {
      id: "wind",
      title: t("wind"),
      value: `${weather.wind.speed} m/s`,
      icon: <Wind size={28} />,
    },
    {
      id: "pressure",
      title: t("pressure"),
      value: `${weather.main.pressure} hPa`,
      icon: <Gauge size={28} />,
    },
    {
      id: "visibility",
      title: t("visibility"),
      value: `${weather.visibility / 1000} km`,
      icon: <Eye size={28} />,
    },
    {
      id: "sunrise",
      title: t("sunrise"),
      value: new Date(
        weather.sys.sunrise * 1000
      ).toLocaleTimeString(),
      icon: <Sunrise size={28} />,
    },
    {
      id: "sunset",
      title: t("sunset"),
      value: new Date(
        weather.sys.sunset * 1000
      ).toLocaleTimeString(),
      icon: <Sunset size={28} />,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className="
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            p-6
            shadow-xl
            hover:scale-105
            transition
            duration-300
          "
        >
          <div className="text-blue-300 mb-4">
            {card.icon}
          </div>

          <p className="text-gray-300 text-sm">
            {card.title}
          </p>

          <h2 className="text-white text-2xl font-bold mt-2">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default WeatherHighlights;