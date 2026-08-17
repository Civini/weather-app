import {
  MapPin,
  Heart,
  Droplets,
  Wind,
  Gauge,
  Eye,
} from "lucide-react";

import { useSettings } from "../../context/SettingsContext";

function WeatherHero({ weather, addFavorite }) {
  const { t } = useSettings();

  if (!weather) return null;

  return (
    <section>
      <div
        className="
          rounded-3xl
          border border-white/10
          bg-white/10
          backdrop-blur-2xl
          p-8
          shadow-2xl
        "
      >
        {/* Top */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left */}
          <div>

            <div className="flex items-center gap-2 text-white/80 mb-4">
              <MapPin
                size={18}
                className="text-pink-400"
              />

              <span className="text-2xl">
                {weather.name}, {weather.sys.country}
              </span>
            </div>

            <h1 className="text-7xl font-bold text-white">
              {Math.round(weather.main.temp)}°
            </h1>

            <h2 className="text-4xl text-blue-200 mt-3">
              {weather.weather[0].description}
            </h2>

            <p className="text-xl text-white/70 mt-3">
              {t("feelsLike")}{" "}
              {Math.round(weather.main.feels_like)}°
            </p>

          </div>

          {/* Right */}
          <div className="flex flex-col items-center">

            <div className="text-[120px]">
              ☁️
            </div>

            <button
              onClick={() => addFavorite(weather.name)}
              className="
                mt-6
                flex
                items-center
                gap-2
                bg-red-500
                hover:bg-red-600
                text-white
                px-7
                py-3
                rounded-full
                transition
              "
            >
              <Heart size={22} />

              {t("addFavorite")}
            </button>

          </div>

        </div>

        {/* Weather Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

          {/* Humidity */}
          <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-xl">

            <Droplets
              className="text-sky-400 mb-4"
              size={28}
            />

            <p className="text-white/70">
              {t("humidity")}
            </p>

            <h3 className="text-4xl font-bold text-white">
              {weather.main.humidity}%
            </h3>

          </div>

          {/* Wind */}
          <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-xl">

            <Wind
              className="text-green-400 mb-4"
              size={28}
            />

            <p className="text-white/70">
              {t("wind")}
            </p>

            <h3 className="text-4xl font-bold text-white">
              {weather.wind.speed} m/s
            </h3>

          </div>

          {/* Pressure */}
          <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-xl">

            <Gauge
              className="text-yellow-400 mb-4"
              size={28}
            />

            <p className="text-white/70">
              {t("pressure")}
            </p>

            <h3 className="text-4xl font-bold text-white">
              {weather.main.pressure} hPa
            </h3>

          </div>

          {/* Visibility */}
          <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-xl">

            <Eye
              className="text-cyan-400 mb-4"
              size={28}
            />

            <p className="text-white/70">
              {t("visibility")}
            </p>

            <h3 className="text-4xl font-bold text-white">
              {weather.visibility / 1000} km
            </h3>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WeatherHero;