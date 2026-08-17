import { useSettings } from "../context/SettingsContext";

function QuickMenu({ setActivePage }) {
  const { t } = useSettings();

  return (
    <div className="flex justify-center gap-6 mt-8 flex-wrap">

      {/* Forecast */}
      <button
        onClick={() => setActivePage("forecast")}
        className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 hover:scale-105 transition"
      >
        <div className="text-4xl">🗓️</div>
        <p className="mt-2 font-semibold">
          {t("forecast")}
        </p>
      </button>

      {/* Hourly */}
      <button
        onClick={() => setActivePage("hourly")}
        className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 hover:scale-105 transition"
      >
        <div className="text-4xl">🕒</div>
        <p className="mt-2 font-semibold">
          {t("hourly")}
        </p>
      </button>

      {/* Chart */}
      <button
        onClick={() => setActivePage("chart")}
        className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 hover:scale-105 transition"
      >
        <div className="text-4xl">📈</div>
        <p className="mt-2 font-semibold">
          {t("charts")}
        </p>
      </button>

      {/* Sunrise */}
      <button
        onClick={() => setActivePage("sunrise")}
        className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 hover:scale-105 transition"
      >
        <div className="text-4xl">🌅</div>
        <p className="mt-2 font-semibold">
          {t("sunrise")}
        </p>
      </button>

      {/* AQI */}
      <button
        onClick={() => setActivePage("aqi")}
        className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 hover:scale-105 transition"
      >
        <div className="text-4xl">🌍</div>
        <p className="mt-2 font-semibold">
          {t("airQuality")}
        </p>
      </button>

      {/* Map */}
      <button
        onClick={() => setActivePage("map")}
        className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 hover:scale-105 transition"
      >
        <div className="text-4xl">🗺️</div>
        <p className="mt-2 font-semibold">
          {t("maps")}
        </p>
      </button>

      {/* Favorites */}
      <button
        onClick={() => setActivePage("favorites")}
        className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 hover:scale-105 transition"
      >
        <div className="text-4xl">❤️</div>
        <p className="mt-2 font-semibold">
          {t("favorites")}
        </p>
      </button>

      {/* AI Chat */}
      <button
        onClick={() => setActivePage("chat")}
        className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 hover:scale-105 transition"
      >
        <div className="text-4xl">🤖</div>
        <p className="mt-2 font-semibold">
          {t("aiChat")}
        </p>
      </button>

    </div>
  );
}

export default QuickMenu;