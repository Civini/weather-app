import { useMemo } from "react";
import {
  ArrowLeft,
  BarChart3,
  Thermometer,
  Droplets,
  Wind,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
function ChartPage({
  hourly = [],
  weather,
  setActivePage,
}) {
  const handleBack = () => {
    setActivePage("home");
  };
  const chartData = useMemo(() => {
    if (!Array.isArray(hourly)) {
      return [];
    }
    return hourly
      .filter((item) => item)
      .slice(0, 8)
      .map((item, index) => {
        const dateValue =
          item.date ||
          item.dt ||
          item.time ||
          item.timestamp;
        let date;
        if (typeof dateValue === "number") {
          date = new Date(
            dateValue < 10000000000
              ? dateValue * 1000
              : dateValue
          );
        } else if (dateValue) {
          date = new Date(dateValue);
        } else {
          date = new Date();
          date.setHours(
            date.getHours() + index * 3
          );
        }
        const temperature =
          Number(
            item.temp ??
              item.temperature ??
              item.main?.temp
          );

        const humidity =
          Number(
            item.humidity ??
              item.main?.humidity
          );

        const wind =
          Number(
            item.wind ??
              item.windSpeed ??
              item.wind?.speed
          );

        const condition =
          item.condition ??
          item.weather?.[0]?.main ??
          "Weather";

        return {
          time: date.toLocaleTimeString(
            "en-US",
            {
              hour: "numeric",
              minute: "2-digit",
            }
          ),

          temperature: Number.isFinite(
            temperature
          )
            ? Math.round(temperature)
            : null,

          humidity: Number.isFinite(
            humidity
          )
            ? Math.round(humidity)
            : null,

          wind: Number.isFinite(wind)
            ? Number(wind.toFixed(1))
            : null,

          condition,
        };
      })
      .filter(
        (item) =>
          item.temperature !== null ||
          item.humidity !== null ||
          item.wind !== null
      );
  }, [hourly]);
  const currentTemperature =
    weather?.main?.temp;
  const city =
    weather?.name || "Your Location";
  const country =
    weather?.sys?.country || "";
  if (!chartData.length) {
    return (
      <div className="min-h-[calc(100vh-6rem)] p-6">

        {/* Back button */}
        <button
          type="button"
          onClick={handleBack}
          className="
            group
            inline-flex
            items-center
            gap-3
            px-5
            py-3
            rounded-2xl
            bg-white/10
            hover:bg-white/20
            border border-white/10
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
          "
        >
          <ArrowLeft
            size={21}
            className="
              transition-transform
              group-hover:-translate-x-1
            "
          />

          <span className="font-medium">
            Back to Home
          </span>
        </button>

        {/* Empty card */}

        <div
          className="
            max-w-2xl
            mx-auto
            mt-24
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border border-white/10
            p-12
            text-center
            shadow-2xl
          "
        >
          <BarChart3
            size={60}
            className="
              mx-auto
              mb-6
              text-blue-400
            "
          />

          <h2
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            Weather Chart
          </h2>

          <p
            className="
              mt-3
              text-white/50
            "
          >
            No forecast data is available yet.
          </p>

          <p
            className="
              mt-2
              text-sm
              text-white/30
            "
          >
            Search for a city from the home
            page to load the weather data.
          </p>

          <button
            onClick={handleBack}
            className="
              mt-8
              px-6
              py-3
              rounded-xl
              bg-blue-500
              hover:bg-blue-400
              text-white
              font-semibold
              transition
            "
          >
            Search Weather
          </button>
        </div>
      </div>
    );
  }
  return (
    <div
      className="
        min-h-[calc(100vh-6rem)]
        px-4
        sm:px-6
        lg:px-8
        pb-12
      "
    >
      <button
        type="button"
        onClick={handleBack}
        className="
          group
          inline-flex
          items-center
          gap-3
          px-5
          py-3
          rounded-2xl
          bg-white/10
          hover:bg-white/20
          border border-white/10
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-0.5
        "
      >
        <ArrowLeft
          size={21}
          className="
            transition-transform
            group-hover:-translate-x-1
          "
        />

        <span className="font-medium">
          Back to Home
        </span>
      </button>
      <div className="text-center mt-10">

        <div
          className="
            inline-flex
            items-center
            justify-center
            w-16
            h-16
            rounded-2xl
            bg-blue-500/20
            border border-blue-400/20
            text-blue-300
            shadow-lg
            shadow-blue-500/10
          "
        >
          <BarChart3 size={34} />
        </div>

        <h1
          className="
            mt-5
            text-4xl
            sm:text-5xl
            font-bold
            text-white
          "
        >
          Weather Analytics
        </h1>

        <p
          className="
            mt-3
            text-white/50
          "
        >
          Temperature trends for{" "}
          <span className="text-white font-medium">
            {city}
            {country
              ? `, ${country}`
              : ""}
          </span>
        </p>
      </div>
      <div
        className="
          max-w-6xl
          mx-auto
          mt-10
          grid
          grid-cols-1
          md:grid-cols-3
          gap-5
        "
      >

        {/* Temperature */}

        <div
          className="
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border border-white/10
            p-6
            shadow-xl
            hover:bg-white/15
            transition
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                p-3
                rounded-xl
                bg-orange-400/10
                text-orange-400
              "
            >
              <Thermometer size={23} />
            </div>

            <div>
              <p className="text-white/40 text-sm">
                Current Temperature
              </p>

              <p
                className="
                  text-3xl
                  font-bold
                  text-white
                "
              >
                {typeof currentTemperature ===
                "number"
                  ? `${Math.round(
                      currentTemperature
                    )}°`
                  : "--"}
              </p>
            </div>
          </div>
        </div>

        {/* Humidity */}

        <div
          className="
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border border-white/10
            p-6
            shadow-xl
            hover:bg-white/15
            transition
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                p-3
                rounded-xl
                bg-cyan-400/10
                text-cyan-400
              "
            >
              <Droplets size={23} />
            </div>

            <div>
              <p className="text-white/40 text-sm">
                Humidity
              </p>

              <p
                className="
                  text-3xl
                  font-bold
                  text-white
                "
              >
                {weather?.main?.humidity ??
                  "--"}
                %
              </p>
            </div>
          </div>
        </div>

        {/* Wind */}

        <div
          className="
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border border-white/10
            p-6
            shadow-xl
            hover:bg-white/15
            transition
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                p-3
                rounded-xl
                bg-green-400/10
                text-green-400
              "
            >
              <Wind size={23} />
            </div>

            <div>
              <p className="text-white/40 text-sm">
                Wind Speed
              </p>

              <p
                className="
                  text-3xl
                  font-bold
                  text-white
                "
              >
                {weather?.wind?.speed != null
                  ? `${weather.wind.speed} m/s`
                  : "--"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="
          max-w-6xl
          mx-auto
          mt-8
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border border-white/10
          p-5
          sm:p-8
          shadow-2xl
        "
      >

        <div className="mb-6">

          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            Temperature Trend
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-white/40
            "
          >
            Temperature over the next forecast
            intervals
          </p>

        </div>

        <div
          className="
            w-full
            h-[350px]
          "
        >
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <AreaChart
              data={chartData}
              margin={{
                top: 10,
                right: 20,
                left: 0,
                bottom: 10,
              }}
            >

              <defs>

                <linearGradient
                  id="temperatureGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopOpacity={0.6}
                  />

                  <stop
                    offset="100%"
                    stopOpacity={0.05}
                  />
                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="4 4"
                stroke="rgba(255,255,255,0.12)"
              />

              <XAxis
                dataKey="time"
                stroke="rgba(205, 216, 44, 0.45)"
                tick={{
                  fill: "rgba(255,255,255,0.65)",
                  fontSize: 12,
                }}
              />

              <YAxis
                stroke="rgba(134, 228, 32, 0.45)"
                tick={{
                  fill: "rgba(255,255,255,0.65)",
                  fontSize: 12,
                }}
                tickFormatter={(value) =>
                  `${value}°`
                }
              />

              <Tooltip
                contentStyle={{
                  background:
                    "rgba(15,23,42,0.95)",
                  border:
                    "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "14px",
                  color: "#fff",
                }}
                labelStyle={{
                  color: "#cbd5e1",
                }}
                formatter={(value) => [
                  `${value}°`,
                  "Temperature",
                ]}
              />

              <Area
                type="monotone"
                dataKey="temperature"
                stroke="#60a5fa"
                strokeWidth={4}
                fill="url(#temperatureGradient)"
                connectNulls
                dot={{
                  r: 5,
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 7,
                }}
              />

            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div
        className="
          max-w-6xl
          mx-auto
          mt-8
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border border-white/10
          overflow-hidden
          shadow-2xl
        "
      >
        <div className="p-6">
          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            Forecast Details
          </h2>
          <p
            className="
              mt-1
              text-sm
              text-white/40
            "
          >
            Upcoming weather intervals
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr
                className="
                  border-y
                  border-white/10
                  text-left
                "
              >
                <th
                  className="
                    px-6
                    py-4
                    text-sm
                    font-medium
                    text-white/40
                  "
                >
                  Time
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-sm
                    font-medium
                    text-white/40
                  "
                >
                  Condition
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-sm
                    font-medium
                    text-white/40
                  "
                >
                  Temperature
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-sm
                    font-medium
                    text-white/40
                  "
                >
                  Humidity
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-sm
                    font-medium
                    text-white/40
                  "
                >
                  Wind
                </th>
              </tr>
            </thead>

            <tbody>

              {chartData.map(
                (item, index) => (
                  <tr
                    key={index}
                    className="
                      border-b
                      border-white/5
                      hover:bg-white/5
                      transition
                    "
                  >
                    <td
                      className="
                        px-6
                        py-4
                        text-white
                        font-medium
                      "
                    >
                      {item.time}
                    </td>

                    <td
                      className="
                        px-6
                        py-4
                        text-white/60
                      "
                    >
                      {item.condition}
                    </td>

                    <td
                      className="
                        px-6
                        py-4
                        text-white
                        font-bold
                      "
                    >
                      {item.temperature != null
                        ? `${item.temperature}°`
                        : "--"}
                    </td>
                    <td
                      className="
                        px-6
                        py-4
                        text-cyan-300
                      "
                    >
                      {item.humidity != null
                        ? `${item.humidity}%`
                        : "--"}
                    </td>

                    <td
                      className="
                        px-6
                        py-4
                        text-green-300
                      "
                    >
                      {item.wind != null
                        ? `${item.wind} m/s`
                        : "--"}
                    </td>

                  </tr>
                )
              )}

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
export default ChartPage;