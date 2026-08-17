import {
  ArrowLeft,
  Clock3,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudSun,
  Sun,
  CloudLightning,
  Droplets,
  Wind,
  Thermometer,
} from "lucide-react";

function HourlyPage({ hourly, weather, setActivePage }) {
  const handleBack = () => {
    setActivePage("home");
  };
  const getWeatherIcon = (condition) => {
    const value = condition?.toLowerCase() || "";

    if (value.includes("thunderstorm")) {
      return <CloudLightning size={52} />;
    }

    if (
      value.includes("rain") ||
      value.includes("drizzle")
    ) {
      return <CloudRain size={52} />;
    }

    if (value.includes("snow")) {
      return <CloudSnow size={52} />;
    }

    if (value.includes("clear")) {
      return <Sun size={52} />;
    }

    if (value.includes("cloud")) {
      return <CloudSun size={52} />;
    }

    return <Cloud size={52} />;
  };
  const getIconColor = (condition) => {
    const value = condition?.toLowerCase() || "";

    if (value.includes("thunderstorm")) {
      return "text-purple-400";
    }

    if (
      value.includes("rain") ||
      value.includes("drizzle")
    ) {
      return "text-blue-400";
    }

    if (value.includes("snow")) {
      return "text-cyan-200";
    }

    if (value.includes("clear")) {
      return "text-yellow-400";
    }

    if (value.includes("cloud")) {
      return "text-slate-100";
    }

    return "text-white";
  };
  const hourlyList = Array.isArray(hourly)
    ? hourly
    : hourly?.list || [];
  const getDateFromItem = (item) => {
    if (!item) return null;
    if (item.dt) {
      return new Date(item.dt * 1000);
    }
    if (item.dt_txt) {
      return new Date(
        item.dt_txt.replace(" ", "T")
      );
    }

    // Helper-generated values
    if (item.time) {
      const date = new Date(item.time);

      if (!Number.isNaN(date.getTime())) {
        return date;
      }
    }
    if (item.date) {
      const date = new Date(item.date);

      if (!Number.isNaN(date.getTime())) {
        return date;
      }
    }

    return null;
  };
  const formatTime = (item) => {
    const date = getDateFromItem(item);

    if (!date) {
      return "--";
    }
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(date);
  };
  const formatDate = (item) => {
    const date = getDateFromItem(item);

    if (!date) {
      return "";
    }
    return new Intl.DateTimeFormat("en-IN", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }).format(date);
  };
  const getTemperature = (item) => {
    if (
      typeof item?.main?.temp === "number"
    ) {
      return Math.round(item.main.temp);
    }

    if (
      typeof item?.temp === "number"
    ) {
      return Math.round(item.temp);
    }

    if (
      typeof item?.temperature === "number"
    ) {
      return Math.round(item.temperature);
    }

    return "--";
  };
  const getCondition = (item) => {
    return (
      item?.weather?.[0]?.main ||
      item?.condition ||
      "Clouds"
    );
  };
  const getDescription = (item) => {
    return (
      item?.weather?.[0]?.description ||
      item?.description ||
      getCondition(item)
    );
  };
  const getHumidity = (item) => {
    if (
      typeof item?.main?.humidity === "number"
    ) {
      return item.main.humidity;
    }

    if (
      typeof item?.humidity === "number"
    ) {
      return item.humidity;
    }

    return null;
  };
  const getWind = (item) => {
    if (
      typeof item?.wind?.speed === "number"
    ) {
      return item.wind.speed;
    }

    if (
      typeof item?.wind === "number"
    ) {
      return item.wind;
    }
    return null;
  };
  const currentTemperature =
    weather?.main?.temp;
  const locationName =
    weather?.name || "Your Location";
  const country =
    weather?.sys?.country || "";
  if (!hourlyList.length) {
    return (
      <div
        className="
          min-h-[calc(100vh-6rem)]
          flex
          items-center
          justify-center
          px-6
        "
      >
        <div
          className="
            text-center
            p-10
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            shadow-2xl
          "
        >
          <Clock3
            size={58}
            className="
              mx-auto
              mb-5
              text-blue-400
            "
          />

          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            Hourly forecast unavailable
          </h2>

          <p
            className="
              mt-3
              text-white/50
            "
          >
            Search ur Favourite cities.
          </p>

          <button
            type="button"
            onClick={handleBack}
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-2xl
              bg-white/10
              hover:bg-white/20
              border
              border-white/10
              text-white
              transition
            "
          >
            <ArrowLeft size={19} />
            Back to Home
          </button>
        </div>
      </div>
    );
  }
  return (
    <div
      className="
        relative
        min-h-[calc(100vh-6rem)]
        pb-10
        px-1
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
          border
          border-white/10
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
            duration-300
            group-hover:-translate-x-1
          "
        />
        <span className="font-medium">
          Back to Home
        </span>
      </button>
      <div
        className="
          mt-8
          text-center
        "
      >
        <div
          className="
            inline-flex
            items-center
            justify-center
            h-16
            w-16
            rounded-2xl
            bg-blue-500/20
            border
            border-blue-300/20
            text-blue-300
            shadow-lg
            shadow-blue-500/10
            animate-[float_4s_ease-in-out_infinite]
          "
        >
          <Clock3 size={34} />
        </div>

        <h1
          className="
            mt-5
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            text-white
          "
        >
          Hourly Forecast
        </h1>

        <p
          className="
            mt-3
            text-white/50
            text-base
          "
        >
          Forecast intervals
        </p>
        <p
          className="
            mt-1
            text-white/40
            text-sm
          "
        >
          {locationName}
          {country ? `, ${country}` : ""}
        </p>
      </div>
      {weather && (
        <div
          className="
            mt-8
            grid
            grid-cols-1
            md:grid-cols-3
            gap-4
          "
        >
          {/* Feels Like */}

          <div
            className="
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              p-5
              shadow-xl
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <Thermometer
                size={23}
                className="text-orange-400"
              />

              <span className="text-white/50">
                Feels Like
              </span>
            </div>

            <p
              className="
                mt-3
                text-3xl
                font-bold
                text-white
              "
            >
              {weather.main?.feels_like != null
                ? `${Math.round(
                    weather.main.feels_like
                  )}°`
                : "--"}
            </p>
          </div>

          {/* Humidity */}

          <div
            className="
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              p-5
              shadow-xl
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <Droplets
                size={23}
                className="text-cyan-400"
              />

              <span className="text-white/50">
                Humidity
              </span>
            </div>

            <p
              className="
                mt-3
                text-3xl
                font-bold
                text-white
              "
            >
              {weather.main?.humidity != null
                ? `${weather.main.humidity}%`
                : "--"}
            </p>
          </div>

          {/* Wind */}

          <div
            className="
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              p-5
              shadow-xl
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <Wind
                size={23}
                className="text-green-400"
              />

              <span className="text-white/50">
                Wind Speed
              </span>
            </div>

            <p
              className="
                mt-3
                text-3xl
                font-bold
                text-white
              "
            >
              {weather.wind?.speed != null
                ? `${weather.wind.speed.toFixed(
                    1
                  )} m/s`
                : "--"}
            </p>
          </div>
        </div>
      )}
      <div
        className="
          mt-10
          relative
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            mb-5
          "
        >
          <div>
            <h2
              className="
                text-xl
                sm:text-2xl
                font-bold
                text-white
              "
            >
              Next Forecast Intervals
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-white/40
              "
            >
              at 3-hour intervals
            </p>
          </div>

          <Clock3
            size={27}
            className="text-blue-300"
          />
        </div>

         

        <div
          className="
            overflow-x-auto
            pb-5
            scrollbar-thin
            scrollbar-thumb-white/20
            scrollbar-track-transparent
          "
        >
          <div
            className="
              flex
              gap-5
              min-w-max
            "
          >
            {hourlyList
              .slice(0, 8)
              .map((item, index) => {
                const condition =
                  getCondition(item);

                const description =
                  getDescription(item);

                const iconColor =
                  getIconColor(condition);

                const temperature =
                  getTemperature(item);

                const humidity =
                  getHumidity(item);

                const wind =
                  getWind(item);

                return (
                  <div
                    key={
                      item?.dt ||
                      item?.dt_txt ||
                      `${index}-${temperature}`
                    }
                    className="
                      group
                      relative
                      w-[190px]
                      sm:w-[210px]
                      min-h-[350px]
                      overflow-hidden
                      rounded-3xl
                      bg-white/10
                      backdrop-blur-xl
                      border
                      border-white/10
                      p-5
                      text-center
                      shadow-xl
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:bg-white/15
                    "
                  >
                    {/* Animated glow */}

                    <div
                      className="
                        absolute
                        -top-16
                        -right-16
                        w-32
                        h-32
                        rounded-full
                        bg-blue-500/10
                        blur-3xl
                        group-hover:bg-blue-400/20
                        transition-all
                        duration-500
                      "
                    />

                    <div
                      className="
                        relative
                        z-10
                      "
                    >
                      {/* TIME */}

                      <p
                        className="
                          text-lg
                          font-bold
                          text-white
                        "
                      >
                        {formatTime(item)}
                      </p>

                      {/* DATE */}

                      <p
                        className="
                          mt-1
                          text-xs
                          text-white/40
                        "
                      >
                        {formatDate(item)}
                      </p>

                      {/* ICON */}

                      <div
                        className={`
                          mt-7
                          flex
                          justify-center
                          ${iconColor}
                          transition-transform
                          duration-500
                          group-hover:scale-110
                        `}
                      >
                        <div
                          className="
                            animate-[float_4s_ease-in-out_infinite]
                          "
                        >
                          {getWeatherIcon(
                            condition
                          )}
                        </div>
                      </div>

                      {/* TEMPERATURE */}

                      <p
                        className="
                          mt-5
                          text-4xl
                          font-bold
                          text-white
                        "
                      >
                        {temperature}°
                      </p>

                      {/* CONDITION */}

                      <p
                        className="
                          mt-2
                          text-base
                          font-semibold
                          text-white
                        "
                      >
                        {condition}
                      </p>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-1
                          text-xs
                          text-white/40
                          capitalize
                        "
                      >
                        {description}
                      </p>

                      {/* DIVIDER */}

                      <div
                        className="
                          my-5
                          h-px
                          bg-white/10
                        "
                      />

                      {/* DETAILS */}

                      <div
                        className="
                          space-y-3
                          text-xs
                        "
                      >
                        {humidity !== null && (
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                            "
                          >
                            <span
                              className="
                                flex
                                items-center
                                gap-2
                                text-white/40
                              "
                            >
                              <Droplets
                                size={14}
                                className="text-cyan-400"
                              />

                              Humidity
                            </span>

                            <span
                              className="
                                text-white
                                font-medium
                              "
                            >
                              {humidity}%
                            </span>
                          </div>
                        )}

                        {wind !== null && (
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                            "
                          >
                            <span
                              className="
                                flex
                                items-center
                                gap-2
                                text-white/40
                              "
                            >
                              <Wind
                                size={14}
                                className="text-green-400"
                              />

                              Wind
                            </span>

                            <span
                              className="
                                text-white
                                font-medium
                              "
                            >
                              {wind.toFixed(1)} m/s
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {currentTemperature != null && (
        <div
          className="
            mt-6
            text-center
            text-white/40
          "
        >
          Current temperature:{" "}
          <span className="font-semibold text-white">
            {Math.round(currentTemperature)}°
          </span>
        </div>
      )}
    </div>
  );
}

export default HourlyPage;