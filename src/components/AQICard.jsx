function AQICard({ aqi }) {
  const getAQIInfo = (value) => {
    switch (value) {
      case 1:
        return {
          text: "Good",
          color: "text-green-400",
          bg: "bg-green-500",
        };
      case 2:
        return {
          text: "Fair",
          color: "text-lime-400",
          bg: "bg-lime-500",
        };
      case 3:
        return {
          text: "Moderate",
          color: "text-yellow-400",
          bg: "bg-yellow-500",
        };
      case 4:
        return {
          text: "Poor",
          color: "text-orange-400",
          bg: "bg-orange-500",
        };
      case 5:
        return {
          text: "Very Poor",
          color: "text-red-500",
          bg: "bg-red-600",
        };
      default:
        return {
          text: "Unknown",
          color: "text-white",
          bg: "bg-gray-500",
        };
    }
  };

  const info = getAQIInfo(aqi);

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        🌍 Air Quality
      </h2>

      <div className="max-w-md mx-auto bg-white/15 backdrop-blur-xl rounded-3xl p-8 shadow-xl text-center">

        <div
          className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-white text-3xl font-bold ${info.bg}`}
        >
          {aqi}
        </div>

        <h3 className={`mt-4 text-2xl font-bold ${info.color}`}>
          {info.text}
        </h3>

        <p className="text-white/80 mt-2">
          OpenWeather Air Quality Index
        </p>

      </div>
    </div>
  );
}

export default AQICard;