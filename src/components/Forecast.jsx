import { useSettings } from "../context/SettingsContext";

function Forecast({ forecast }) {
  const { t } = useSettings();

  console.log(forecast);

  if (!forecast || forecast.length === 0) {
    return null;
  }

  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold text-center text-white mb-8">
        🌤 {t("fiveDayForecast")}
      </h2>

      <div className="flex justify-center gap-4 flex-wrap">

        {forecast.map((day, index) => (
          <div
            key={index}
            className="
              bg-white/15
              backdrop-blur-lg
              rounded-2xl
              px-4
              py-3
              w-24
              text-center
              text-white
              shadow-lg
              hover:scale-105
              transition
            "
          >

            <h3 className="font-semibold text-lg">
              {day.day}
            </h3>

            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.weather}
            />

            <p className="font-semibold text-lg">
              {day.tempMax}°
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Forecast;