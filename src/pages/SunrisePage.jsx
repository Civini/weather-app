import { useEffect, useMemo, useState } from "react";
import {
  Sunrise,
  Sunset,
  Sun,
  Moon,
  Clock3,
  MapPin,
} from "lucide-react";

function SunrisePage({ weather }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const hasSunData =
    weather?.sys?.sunrise &&
    weather?.sys?.sunset &&
    typeof weather?.timezone === "number";
  const sunriseUTC = hasSunData
    ? weather.sys.sunrise * 1000
    : null;

  const sunsetUTC = hasSunData
    ? weather.sys.sunset * 1000
    : null;

  const timezoneOffset = hasSunData
    ? weather.timezone * 1000
    : 0;

  const sunriseLocal = hasSunData
    ? sunriseUTC + timezoneOffset
    : null;

  const sunsetLocal = hasSunData
    ? sunsetUTC + timezoneOffset
    : null;

  const formatWeatherTime = (localTimestamp) => {
    if (!localTimestamp) {
      return "--:--";
    }

    return new Date(localTimestamp).toLocaleTimeString(
      "en-US",
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "UTC",
      }
    );
  };
  const locationNow = now + timezoneOffset;
  const currentTime = hasSunData
    ? formatWeatherTime(locationNow)
    : new Date(now).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
  const sunriseTime = formatWeatherTime(
    sunriseLocal
  );

  const sunsetTime = formatWeatherTime(
    sunsetLocal
  );
  const daylightDuration = useMemo(() => {
    if (!sunriseUTC || !sunsetUTC) {
      return "--h --m";
    }

    const difference =
      sunsetUTC - sunriseUTC;

    const hours = Math.floor(
      difference / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    return `${hours}h ${minutes}m`;
  }, [sunriseUTC, sunsetUTC]);
  const progress = useMemo(() => {
    if (
      !sunriseUTC ||
      !sunsetUTC
    ) {
      return 0;
    }
    const total =
      sunsetUTC - sunriseUTC;
    const elapsed =
      now - sunriseUTC;
    return Math.min(
      100,
      Math.max(
        0,
        (elapsed / total) * 100
      )
    );
  }, [
    sunriseUTC,
    sunsetUTC,
    now,
  ]);
  const isDay =
    hasSunData &&
    now >= sunriseUTC &&
    now <= sunsetUTC;
  const getStatus = () => {
    if (!hasSunData) {
      return "Sun information unavailable";
    }
    if (now < sunriseUTC) {
      return "Sunrise is coming";
    }
    if (now > sunsetUTC) {
      return "Sun has set";
    }
    return "Daylight";
  };
  const city =
    weather?.name || "Current Location";

  const country =
    weather?.sys?.country || "";
  const sunLeft = 8 + progress * 84;
  const sunBottom =
    70 +
    Math.sin(
      (progress / 100) * Math.PI
    ) *
      170;
  return (
    <div className="relative min-h-[calc(100vh-6rem)] overflow-hidden">
      <div
        className={`
          absolute
          inset-0
          pointer-events-none

          transition-all
          duration-1000

          ${
            isDay
              ? "bg-gradient-to-b from-orange-400/10 via-sky-500/5 to-transparent"
              : "bg-gradient-to-b from-indigo-700/20 via-purple-900/10 to-transparent"
          }
        `}
      />
      <div
        className={`
          absolute
          left-1/2
          top-32
          -translate-x-1/2
          w-[420px]
          h-[420px]
          rounded-full
          blur-3xl
          pointer-events-none
          transition-all
          duration-1000
          ${
            isDay
              ? "bg-orange-400/10"
              : "bg-purple-500/10"
          }
        `}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div className="flex items-center gap-3">
            <div
              className="
                h-12
                w-12
                rounded-2xl
                bg-gradient-to-br
                from-orange-400
                to-pink-500
                flex
                items-center
                justify-center
                shadow-lg
                shadow-orange-500/20
              "
            >
              <Sunrise
                size={26}
                className="text-white"
              />
            </div>
            <div>
              <h1
                className="
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl
                  font-bold
                  text-white
                "
              >
                Sunrise & Sunset
              </h1>
              <div
                className="
                  flex
                  items-center
                  gap-2
                  mt-1
                  text-sm
                  text-white/50
                "
              >
                <MapPin size={15} />
                <span>
                  {city}
                  {country
                    ? `, ${country}`
                    : ""}
                </span>
              </div>
            </div>
          </div>
          {/* STATUS */}
          <div
            className="
              flex
              items-center
              gap-3
              px-5
              py-3
              rounded-2xl
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
            "
          >
            {isDay ? (
              <Sun
                size={22}
                className="text-yellow-300"
              />
            ) : (
              <Moon
                size={22}
                className="text-blue-300"
              />
            )}
            <div>
              <p className="text-xs text-white/40">
                Current status
              </p>
              <p className="text-sm font-semibold text-white">
                {getStatus()}
              </p>
            </div>
          </div>
        </div>
        <div
          className="
            relative
            mt-8
            h-[330px]
            sm:h-[390px]
            lg:h-[430px]
            rounded-[2rem]
            overflow-hidden
            border
            border-white/10
            bg-gradient-to-b
            from-slate-900/50
            via-slate-800/30
            to-orange-900/20
            backdrop-blur-xl
            shadow-2xl
          "
        >
          {/* SKY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-blue-950/40
              via-orange-500/5
              to-orange-500/10
            "
          />
          <div className="absolute inset-0 pointer-events-none">
            {[
              [10, 20],
              [18, 35],
              [27, 15],
              [38, 28],
              [51, 12],
              [63, 30],
              [72, 17],
              [84, 26],
              [92, 12],
              [15, 58],
              [75, 55],
            ].map(([left, top], index) => (
              <span
                key={index}
                className="
                  absolute
                  w-1
                  h-1
                  rounded-full
                  bg-white/40
                  animate-pulse
                "
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay:
                    `${index * 300}ms`,
                }}
              />
            ))}
          </div>
          <div
            className="
              absolute
              left-[8%]
              right-[8%]
              bottom-[-150px]
              h-[370px]
              rounded-[50%]
              border-t
              border-white/20
              opacity-60
            "
          />
          <div
            className="
              absolute
              left-[15%]
              right-[15%]
              bottom-[-100px]
              h-[300px]
              rounded-[50%]
              border-t
              border-dashed
              border-orange-300/20
            "
          />
          {hasSunData && isDay && (
            <div
              className="
                absolute

                transition-all
                duration-1000
                ease-linear
              "
              style={{
                left: `${sunLeft}%`,
                bottom: `${sunBottom}px`,
                transform:
                  "translate(-50%, 50%)",
              }}
            >
              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  w-20
                  h-20
                  sm:w-24
                  sm:h-24
                  rounded-full
                  bg-gradient-to-br
                  from-yellow-200
                  via-orange-400
                  to-orange-500
                  shadow-[0_0_70px_rgba(251,191,36,0.65)]
                  animate-pulse
                "
              >
                <Sun
                  size={45}
                  className="
                    text-yellow-100
                    animate-spin
                  "
                  style={{
                    animationDuration:
                      "10s",
                  }}
                />
                <div
                  className="
                    absolute
                    inset-[-15px]
                    rounded-full
                    border
                    border-yellow-300/20
                  "
                />
                <div
                  className="
                    absolute
                    inset-[-30px]
                    rounded-full
                    border
                    border-orange-300/10
                  "
                />
              </div>
            </div>
          )}
          {hasSunData && !isDay && (
            <div
              className="
                absolute
                right-[15%]
                top-[70px]
                transition-all
                duration-1000
              "
            >
              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  w-20
                  h-20
                  rounded-full
                  bg-gradient-to-br
                  from-slate-100
                  to-blue-200
                  shadow-[0_0_60px_rgba(147,197,253,0.35)]
                  animate-pulse
                "
              >
                <Moon
                  size={42}
                  className="text-blue-900/70"
                />
              </div>
            </div>
          )}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-20
              bg-gradient-to-t
              from-orange-500/20
              to-transparent
            "
          />
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-[2px]
              bg-gradient-to-r
              from-transparent
              via-orange-300/40
              to-transparent
            "
          />
          <div
            className="
              absolute
              bottom-5
              left-6
              right-6
              flex
              justify-between
            "
          >
            <div>
              <p className="text-xs text-white/40">
                Sunrise
              </p>
              <p className="text-sm font-semibold text-orange-200">
                {sunriseTime}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-white/40">
                Now
              </p>
              <p className="text-sm font-semibold text-white">
                {currentTime}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/40">
                Sunset
              </p>
              <p className="text-sm font-semibold text-purple-200">
                {sunsetTime}
              </p>
            </div>
          </div>
        </div>
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
            mt-6
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              p-6
              bg-gradient-to-br
              from-orange-500/20
              to-red-500/5
              border
              border-orange-300/10
              backdrop-blur-xl
              group
              transition
              duration-300
              hover:-translate-y-1
              hover:border-orange-300/30
            "
          >
            <div
              className="
                absolute
                -right-8
                -top-8
                w-28
                h-28
                rounded-full
                bg-orange-400/10
                blur-2xl
              "
            />
            <div className="relative">
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className="
                    h-12
                    w-12
                    rounded-2xl
                    bg-orange-400/15
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Sunrise
                    size={25}
                    className="text-orange-300"
                  />
                </div>

                <Sun
                  size={25}
                  className="
                    text-orange-300
                    group-hover:rotate-45
                    transition-transform
                    duration-500
                  "
                />
              </div>
              <p className="mt-5 text-sm text-white/50">
                Sunrise
              </p>
              <p className="mt-1 text-3xl font-bold text-white">
                {sunriseTime}
              </p>
              <p className="mt-2 text-xs text-orange-200/70">
                Start of daylight
              </p>
            </div>
          </div>
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              p-6
              bg-gradient-to-br
              from-purple-500/20
              to-indigo-500/5
              border
              border-purple-300/10
              backdrop-blur-xl
              group
              transition
              duration-300
              hover:-translate-y-1
              hover:border-purple-300/30
            "
          >

            <div
              className="
                absolute
                -right-8
                -top-8
                w-28
                h-28
                rounded-full
                bg-purple-400/10
                blur-2xl
              "
            />
            <div className="relative">

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <div
                  className="
                    h-12
                    w-12

                    rounded-2xl

                    bg-purple-400/15

                    flex
                    items-center
                    justify-center
                  "
                >
                  <Sunset
                    size={25}
                    className="text-purple-300"
                  />
                </div>

                <Moon
                  size={25}
                  className="
                    text-purple-300

                    group-hover:-rotate-12

                    transition-transform
                    duration-500
                  "
                />

              </div>

              <p className="mt-5 text-sm text-white/50">
                Sunset
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {sunsetTime}
              </p>

              <p className="mt-2 text-xs text-purple-200/70">
                End of daylight
              </p>

            </div>

          </div>
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              p-6
              bg-gradient-to-br
              from-blue-500/20
              to-cyan-500/5
              border
              border-blue-300/10
              backdrop-blur-xl
              group
              transition
              duration-300
              hover:-translate-y-1
              hover:border-blue-300/30
            "
          >
            <div
              className="
                absolute
                -right-8
                -top-8
                w-28
                h-28
                rounded-full
                bg-blue-400/10
                blur-2xl
              "
            />

            <div className="relative">
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <div
                  className="
                    h-12
                    w-12
                    rounded-2xl
                    bg-blue-400/15
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Clock3
                    size={25}
                    className="text-blue-300"
                  />
                </div>

                <div className="text-xs text-blue-200/70">
                  {isDay
                    ? `${Math.round(progress)}%`
                    : "0%"}
                </div>

              </div>

              <p className="mt-5 text-sm text-white/50">
                Daylight duration
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {daylightDuration}
              </p>

              {/* PROGRESS BAR */}

              <div
                className="
                  mt-4
                  h-2
                  rounded-full
                  bg-white/10
                  overflow-hidden
                "
              >
                <div
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-orange-400
                    via-yellow-300
                    to-purple-400
                    transition-all
                    duration-1000
                  "
                  style={{
                    width: `${
                      isDay ? progress : 0
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="
            mt-6
            mb-8

            flex
            flex-col
            sm:flex-row
            items-start
            sm:items-center
            justify-between
            gap-3
            px-5
            py-4
            rounded-2xl
            bg-white/5
            border
            border-white/10
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            {isDay ? (
              <Sun
                size={20}
                className="text-yellow-300"
              />
            ) : (
              <Moon
                size={20}
                className="text-blue-300"
              />
            )}
            <span className="text-sm text-white/60">
              {getStatus()}
            </span>
          </div>
          <p className="text-xs text-white/30">
            Live weather from weatherForecast
          </p>
        </div>
      </div>
    </div>
  );
}
export default SunrisePage;