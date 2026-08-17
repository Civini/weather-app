import {
  ArrowLeft,
  Wind,
  HeartPulse,
  Activity,
  ShieldCheck,
  Leaf,
  Gauge,
} from "lucide-react";
function AQIPage({ aqi, setActivePage }) {
   const getAQIInfo = (value) => {
    switch (Number(value)) {
      case 1:
        return {
          label: "Good",
          description:
            "Air quality is good and poses little or no health risk.",
          health:
            "No special precautions are normally needed for most people.",
          activity:
            "Outdoor activities are generally safe and suitable.",
          color: "text-green-400",
          bg: "bg-green-500/20",
          border: "border-green-400/20",
          iconBg: "bg-green-500/20",
          glow: "shadow-green-500/20",
          score: "Good",
        };

      case 2:
        return {
          label: "Fair",
          description:
            "Air quality is acceptable, although some pollutants may affect sensitive people.",
          health:
            "Sensitive individuals may want to monitor symptoms during prolonged outdoor activity.",
          activity:
            "Outdoor activities are generally suitable for most people.",
          color: "text-lime-400",
          bg: "bg-lime-500/20",
          border: "border-lime-400/20",
          iconBg: "bg-lime-500/20",
          glow: "shadow-lime-500/20",
          score: "Fair",
        };
         case 3:
        return {
          label: "Moderate",
          description:
            "Air quality may affect sensitive individuals, while the general population is less likely to be affected.",
          health:
            "Sensitive individuals should consider reducing prolonged or strenuous outdoor activity.",
          activity:
            "Outdoor activity is possible, but sensitive people should take precautions.",
          color: "text-yellow-400",
          bg: "bg-yellow-500/20",
          border: "border-yellow-400/20",
          iconBg: "bg-yellow-500/20",
          glow: "shadow-yellow-500/20",
          score: "Moderate",
        };
        case 4:
        return {
          label: "Poor",
          description:
            "Air quality may be unhealthy, especially for sensitive groups.",
          health:
            "Sensitive individuals should reduce prolonged outdoor activity and monitor symptoms.",
          activity:
            "Consider limiting strenuous outdoor activities.",
          color: "text-orange-400",
          bg: "bg-orange-500/20",
          border: "border-orange-400/20",
          iconBg: "bg-orange-500/20",
          glow: "shadow-orange-500/20",
          score: "Poor",
        };
         case 5:
        return {
          label: "Very Poor",
          description:
            "Air quality is very poor and may pose health risks.",
          health:
            "Everyone should consider reducing prolonged or strenuous outdoor activity.",
          activity:
            "Avoid prolonged outdoor activity when possible.",
          color: "text-red-400",
          bg: "bg-red-500/20",
          border: "border-red-400/20",
          iconBg: "bg-red-500/20",
          glow: "shadow-red-500/20",
          score: "Very Poor",
        };

      default:
        return {
          label: "Unavailable",
          description:
            "Air quality information is currently unavailable.",
          health:
            "Air quality information could not be loaded.",
          activity:
            "Please try again after weather data has loaded.",
          color: "text-white/60",
          bg: "bg-white/10",
          border: "border-white/10",
          iconBg: "bg-white/10",
          glow: "shadow-black/10",
          score: "--",
        };
    }
  };
  const info = getAQIInfo(aqi);
  const handleBack = () => {
    setActivePage("home");
  };
  if (aqi === null || aqi === undefined) {
    return (
      <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center p-6">
        <div
          className="
            w-full
            max-w-xl
            rounded-3xl
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/10
            p-10
            text-center
            shadow-2xl
          "
        >
          <Gauge
            size={58}
            className="mx-auto mb-5 text-green-400"
          />

          <h2 className="text-2xl font-bold text-white">
            Air Quality Unavailable
          </h2>

          <p className="mt-3 text-white/50">
            Search for a city or allow your current
            location to load the latest air quality.
          </p>

          <button
            type="button"
            onClick={handleBack}
            className="
              mt-7
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-white/10
              hover:bg-white/20
              border
              border-white/10
              px-5
              py-3
              text-white
              transition
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
    <div className="relative min-h-[calc(100vh-6rem)] pb-12">
       <button
        type="button"
        onClick={handleBack}
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-2xl
          bg-white/10
          hover:bg-white/20
          border
          border-white/10
          px-5
          py-3
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
      <div className="mt-10 text-center">

        <div
          className="
            inline-flex
            items-center
            justify-center
            w-16
            h-16
            rounded-2xl
            bg-green-500/20
            border
            border-green-400/20
            text-green-400
            shadow-lg
            shadow-green-500/10
            animate-[float_4s_ease-in-out_infinite]
          "
        >
          <Wind size={34} />
        </div>
         <h1
          className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-white
          "
        >
          Air Quality
        </h1>
      </div>
       <div
        className={`
          relative
          mt-10
          mx-auto
          max-w-4xl
          overflow-hidden
          rounded-[2rem]
          border
          ${info.border}
          ${info.bg}
          backdrop-blur-2xl
          shadow-2xl
          ${info.glow}
          p-8
          sm:p-12
          text-center
        `}
      >

        {/* Animated background glow */}

        <div
          className="
            absolute
            -top-32
            -left-32
            w-72
            h-72
            rounded-full
            bg-green-400/10
            blur-3xl
            animate-pulse
          "
        />

        <div
          className="
            absolute
            -bottom-32
            -right-32
            w-72
            h-72
            rounded-full
            bg-blue-400/10
            blur-3xl
            animate-pulse
          "
        />

        <div className="relative z-10">

          {/* AQI NUMBER */}

          <div
            className={`
              mx-auto
              flex
              items-center
              justify-center
              w-40
              h-40
              rounded-full
              ${info.bg}
              border
              ${info.border}
              shadow-2xl
              animate-[float_4s_ease-in-out_infinite]
            `}
          >
            <span
              className={`
                text-7xl
                font-black
                ${info.color}
              `}
            >
              {aqi}
            </span>
          </div>

          {/* LABEL */}

          <h2
            className={`
              mt-7
              text-4xl
              sm:text-5xl
              font-black
              ${info.color}
            `}
          >
            {info.label}
          </h2>
          <p className="mt-7 max-w-2xl mx-auto text-white/70 text-base sm:text-lg">
            {info.description}
          </p>
          <div className="mt-10">

            <p className="mb-4 text-sm text-white/40">
               AQI Scale
            </p>

            <div className="grid grid-cols-5 gap-2">

              {[1, 2, 3, 4, 5].map((level) => {

                const active =
                  Number(aqi) === level;

                const colors = {
                  1: "bg-green-500",
                  2: "bg-lime-500",
                  3: "bg-yellow-500",
                  4: "bg-orange-500",
                  5: "bg-red-500",
                };

                return (
                  <div
                    key={level}
                    className={`
                      h-2
                      rounded-full
                      ${colors[level]}
                      transition-all
                      duration-500
                      ${
                        active
                          ? "scale-y-150 shadow-lg"
                          : "opacity-30"
                      }
                    `}
                  />
                );
              })}

            </div>

            <div className="mt-3 grid grid-cols-5 text-xs text-white/40">
              <span>Good</span>
              <span>Fair</span>
              <span>Moderate</span>
              <span>Poor</span>
              <span>Very Poor</span>
            </div>

          </div>
        </div>
      </div>
      <div
        className="
          mt-7
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-5
        "
      >

        {/* HEALTH */}

        <div
          className="
            group
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            p-6
            shadow-xl
            transition-all
            duration-500
            hover:-translate-y-1
            hover:bg-white/15
          "
        >
          <div className="flex items-center gap-4">

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-pink-500/10
                flex
                items-center
                justify-center
                text-pink-400
                group-hover:scale-110
                transition-transform
              "
            >
              <HeartPulse size={28} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">
                Health Impact
              </h3>

              <p className="text-sm text-white/40">
                What this means for you
              </p>
            </div>

          </div>

          <p className="mt-6 text-white/60 leading-relaxed">
            {info.health}
          </p>
        </div>

        {/* OUTDOOR ACTIVITY */}

        <div
          className="
            group
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            p-6
            shadow-xl
            transition-all
            duration-500
            hover:-translate-y-1
            hover:bg-white/15
          "
        >
          <div className="flex items-center gap-4">

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-green-500/10
                flex
                items-center
                justify-center
                text-green-400
                group-hover:scale-110
                transition-transform
              "
            >
              <Activity size={28} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">
                Outdoor Activity
              </h3>

              <p className="text-sm text-white/40">
                Activity recommendation
              </p>
            </div>

          </div>

          <p className="mt-6 text-white/60 leading-relaxed">
            {info.activity}
          </p>
        </div>

        {/* PROTECTION */}

        <div
          className="
            group
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            p-6
            shadow-xl
            transition-all
            duration-500
            hover:-translate-y-1
            hover:bg-white/15
          "
        >
          <div className="flex items-center gap-4">

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-blue-500/10
                flex
                items-center
                justify-center
                text-blue-400
                group-hover:scale-110
                transition-transform
              "
            >
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Stay Protected
              </h3>
              <p className="text-sm text-white/40">
                Air quality guidance
              </p>
            </div>
          </div>
          <p className="mt-6 text-white/60 leading-relaxed">
            Follow local air-quality recommendations
            and adjust outdoor activity according to
            the current AQI level.
          </p>
        </div>
      </div>
      </div>
  );
}
export default AQIPage;







  



