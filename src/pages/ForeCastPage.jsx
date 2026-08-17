import { useMemo } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudSun,
  Sun,
  CloudLightning,
  Droplets,
  Wind,
  Sunrise,
  Sunset,
} from "lucide-react";

function ForecastPage({ forecast, setActivePage, weather }) {
  const getWeatherIcon = (condition, size = 52) => {
    const value = condition?.toLowerCase() || "";

    if (value.includes("thunderstorm")) {
      return <CloudLightning size={size} />;
    }

    if (
      value.includes("rain") ||
      value.includes("drizzle")
    ) {
      return <CloudRain size={size} />;
    }

    if (value.includes("snow")) {
      return <CloudSnow size={size} />;
    }

    if (value.includes("clear")) {
      return <Sun size={size} />;
    }

    if (value.includes("cloud")) {
      return <CloudSun size={size} />;
    }

    return <Cloud size={size} />;
  };
  const getIconColor = (condition) => {
    const value = condition?.toLowerCase() || "";

    if (value.includes("thunderstorm")) {
      return "text-purple-300";
    }

    if (
      value.includes("rain") ||
      value.includes("drizzle")
    ) {
      return "text-blue-300";
    }

    if (value.includes("snow")) {
      return "text-cyan-200";
    }

    if (value.includes("clear")) {
      return "text-yellow-300";
    }

    if (value.includes("cloud")) {
      return "text-slate-100";
    }

    return "text-white";
  };
  const formatDay = (date, index) => {
    if (index === 0) {
      return "Today";
    }

    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(date);
  };
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-IN", {
      month: "short",
      day: "numeric",
    }).format(date);
  };
  const dailyForecast = useMemo(() => {
    if (!Array.isArray(forecast)) {
      return [];
    }

    if (forecast.length === 0) {
      return [];
    }

    const grouped = {};

    forecast.forEach((item) => {
      if (!item || !item.dt) {
        return;
      }

      const date = new Date(item.dt * 1000);

      const year = date.getFullYear();
      const month = String(
        date.getMonth() + 1
      ).padStart(2, "0");

      const day = String(
        date.getDate()
      ).padStart(2, "0");

      const key = `${year}-${month}-${day}`;

      if (!grouped[key]) {
        grouped[key] = [];
      }

      grouped[key].push(item);
    });

    return Object.values(grouped)
      .slice(0, 5)
      .map((items) => {
        const selected = [...items].sort(
          (a, b) => {
            const hourA = new Date(
              a.dt * 1000
            ).getHours();

            const hourB = new Date(
              b.dt * 1000
            ).getHours();

            return (
              Math.abs(hourA - 12) -
              Math.abs(hourB - 12)
            );
          }
        )[0];
        const temperatures = items
          .map((item) => item.main?.temp)
          .filter(
            (temp) =>
              typeof temp === "number"
          );
        const minTemp =
          temperatures.length > 0
            ? Math.min(...temperatures)
            : selected.main?.temp ?? 0;

        const maxTemp =
          temperatures.length > 0
            ? Math.max(...temperatures)
            : selected.main?.temp ?? 0;
        const humidityValues = items
          .map(
            (item) =>
              item.main?.humidity
          )
          .filter(
            (value) =>
              typeof value === "number"
          );

        const humidity =
          humidityValues.length > 0
            ? Math.round(
                humidityValues.reduce(
                  (sum, value) =>
                    sum + value,
                  0
                ) /
                  humidityValues.length
              )
            : null;
        const windValues = items
          .map(
            (item) =>
              item.wind?.speed
          )
          .filter(
            (value) =>
              typeof value === "number"
          );

        const wind =
          windValues.length > 0
            ? (
                windValues.reduce(
                  (sum, value) =>
                    sum + value,
                  0
                ) /
                windValues.length
              ).toFixed(1)
            : null;

        return {
          date: new Date(
            selected.dt * 1000
          ),

          condition:
            selected.weather?.[0]?.main ||
            "Clouds",

          description:
            selected.weather?.[0]
              ?.description ||
            "Weather",

          minTemp,
          maxTemp,
          humidity,
          wind,
        };
      });
  }, [forecast]);
  const handleBack = () => {
    if (setActivePage) {
      setActivePage("home");
    }
  };
  if (!dailyForecast.length) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div
          className="
            w-full
            max-w-xl
            rounded-[32px]
            border
            border-white/15
            bg-white/10
            backdrop-blur-2xl
            shadow-2xl
            p-10
            text-center
          "
        >
          <div
            className="
              mx-auto
              mb-6
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-blue-500/20
              text-blue-300
            "
          >
            <CalendarDays size={40} />
          </div>

          <h2 className="text-3xl font-bold text-white">
            Forecast unavailable
          </h2>

          <p className="mt-3 text-white/60">
            Search for a city first to load the
            five-day forecast.
          </p>

          <button
            onClick={handleBack}
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-blue-500
              px-6
              py-3
              font-semibold
              text-white
              shadow-lg
              shadow-blue-500/20
              transition
              hover:bg-blue-400
              hover:-translate-y-1
            "
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </div>
    );
  }
  return (
    <div
      className="
        min-h-[calc(100vh-5rem)]
        px-4
        pb-12
        sm:px-6
        lg:px-10
      "
    >
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="
            group
            inline-flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/15
            bg-white/10
            px-5
            py-3
            text-white
            backdrop-blur-xl
            transition
            hover:bg-white/20
          "
        >
          <ArrowLeft
            size={20}
            className="
              transition
              group-hover:-translate-x-1
            "
          />
          <span className="font-semibold">
            Back to Home
          </span>
        </button>
      </div>
      <div className="mx-auto mt-12 max-w-4xl text-center">
        <div
          className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-[28px]
            border
            border-blue-300/20
            bg-blue-500/20
            text-blue-300
            shadow-xl
            shadow-blue-500/10
          "
        >
          <CalendarDays size={38} />
        </div>

        <h1
          className="
            mt-6
            text-4xl
            font-bold
            tracking-tight
            text-white
            sm:text-5xl
            lg:text-6xl
          "
        >
          Five Day Forecast
        </h1>

        <p
          className="
            mt-4
            text-base
            text-white/50
            sm:text-lg
          "
        >
          Detailed weather outlook for the
          upcoming days
        </p>

        {weather?.name && (
          <p
            className="
              mt-3
              text-sm
              font-medium
              text-blue-300
            "
          >
            {weather.name}
            {weather.sys?.country
              ? `, ${weather.sys.country}`
              : ""}
          </p>
        )}
      </div>
      <div
        className="
          mx-auto
          mt-12
          grid
          max-w-[1500px]
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-5
        "
      >
        {dailyForecast.map(
          (day, index) => {
            const iconColor =
              getIconColor(
                day.condition
              );

            return (
              <div
                key={`${day.date.getTime()}-${index}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/15
                  bg-white/[0.10]
                  p-6
                  backdrop-blur-2xl
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-white/[0.15]
                  hover:shadow-2xl
                "
              >
                {/* Background glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-blue-400/10
                    blur-3xl
                    transition
                    group-hover:bg-blue-400/20
                  "
                />
                <div className="relative">
                  <p className="text-xl font-bold text-white">
                    {formatDay(
                      day.date,
                      index
                    )}
                  </p>
                  <p className="mt-1 text-sm text-white/45">
                    {formatDate(day.date)}
                  </p>
                  <div
                    className={`
                      my-8
                      flex
                      justify-center
                      ${iconColor}
                    `}
                  >
                    <div
                      className="
                        transition
                        duration-300
                        group-hover:scale-110
                      "
                    >
                      {getWeatherIcon(
                        day.condition
                      )}
                    </div>
                  </div>
                  <p className="text-center text-lg font-semibold text-white">
                    {day.condition}
                  </p>

                  <p
                    className="
                      mt-1
                      text-center
                      text-sm
                      capitalize
                      text-white/45
                    "
                  >
                    {day.description}
                  </p>
                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      justify-center
                      gap-5
                    "
                  >
                    <div className="text-center">
                      <p className="text-xs text-white/40">
                        Low
                      </p>

                      <p className="mt-1 text-2xl font-bold text-blue-300">
                        {Math.round(
                          day.minTemp
                        )}
                        °
                      </p>
                    </div>

                    <div className="h-10 w-px bg-white/10" />

                    <div className="text-center">
                      <p className="text-xs text-white/40">
                        High
                      </p>

                      <p className="mt-1 text-2xl font-bold text-white">
                        {Math.round(
                          day.maxTemp
                        )}
                        °
                      </p>
                    </div>
                  </div>
                  <div
                    className="
                      mt-8
                      space-y-3
                      border-t
                      border-white/10
                      pt-5
                    "
                  >
                    {day.humidity !==
                      null && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-white/50">
                          <Droplets
                            size={16}
                            className="text-cyan-300"
                          />
                          <span>
                            Humidity
                          </span>
                        </div>

                        <span className="font-semibold text-white">
                          {day.humidity}%
                        </span>
                      </div>
                    )}

                    {day.wind !== null && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-white/50">
                          <Wind
                            size={16}
                            className="text-emerald-300"
                          />

                          <span>
                            Wind
                          </span>
                        </div>

                        <span className="font-semibold text-white">
                          {day.wind} m/s
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default ForecastPage;