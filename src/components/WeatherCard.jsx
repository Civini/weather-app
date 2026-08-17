import { Heart, Droplets, Wind, Gauge, Eye, Sunrise, Sunset } from "lucide-react";

function WeatherCard({
  city,
  country,
  temp,
  weather,
  humidity,
  wind,
  feelsLike,
  pressure,
  visibility,
  sunrise,
  sunset,
  icon,
  addFavorite,
}) {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-[32px] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-8 text-white">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center">

        <div>
          <h1 className="text-5xl font-bold">{city}</h1>

          <div className="flex items-center gap-3 mt-3">
            <img
              src={`https://flagcdn.com/w80/${country.toLowerCase()}.png`}
              alt={country}
              className="w-9 h-7 rounded-md"
            />

            <p className="text-lg text-gray-300">{country}</p>
          </div>

          <p className="mt-4 text-2xl text-gray-300">
            {weather}
          </p>
        </div>

        <div className="text-center mt-8 md:mt-0">

          <div className="text-8xl animate-pulse">
            {icon}
          </div>

          <h2 className="text-7xl font-bold mt-2">
            {temp}°
          </h2>

          <p className="text-lg text-gray-300">
            Feels like {feelsLike}°
          </p>

        </div>

      </div>

      {/* Favorite Button */}

      <div className="mt-8 flex justify-center">

        <button
          onClick={() => addFavorite(city)}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-xl transition duration-300"
        >
          <Heart size={18} />

          Add to Favorites

        </button>

      </div>

      {/* Weather Details */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

        <div className="bg-white/10 rounded-3xl p-5 text-center">
          <Droplets className="mx-auto mb-3 text-blue-300" size={30} />
          <p className="text-gray-300">Humidity</p>
          <h3 className="text-2xl font-bold mt-2">{humidity}%</h3>
        </div>

        <div className="bg-white/10 rounded-3xl p-5 text-center">
          <Wind className="mx-auto mb-3 text-cyan-300" size={30} />
          <p className="text-gray-300">Wind</p>
          <h3 className="text-2xl font-bold mt-2">{wind} m/s</h3>
        </div>

        <div className="bg-white/10 rounded-3xl p-5 text-center">
          <Gauge className="mx-auto mb-3 text-green-300" size={30} />
          <p className="text-gray-300">Pressure</p>
          <h3 className="text-2xl font-bold mt-2">{pressure}</h3>
        </div>

        <div className="bg-white/10 rounded-3xl p-5 text-center">
          <Eye className="mx-auto mb-3 text-purple-300" size={30} />
          <p className="text-gray-300">Visibility</p>
          <h3 className="text-2xl font-bold mt-2">{visibility} km</h3>
        </div>

        <div className="bg-white/10 rounded-3xl p-5 text-center">
          <Sunrise className="mx-auto mb-3 text-yellow-300" size={30} />
          <p className="text-gray-300">Sunrise</p>
          <h3 className="font-bold mt-2">{sunrise}</h3>
        </div>

        <div className="bg-white/10 rounded-3xl p-5 text-center">
          <Sunset className="mx-auto mb-3 text-orange-300" size={30} />
          <p className="text-gray-300">Sunset</p>
          <h3 className="font-bold mt-2">{sunset}</h3>
        </div>

        <div className="bg-white/10 rounded-3xl p-5 text-center">
          🌡️
          <p className="text-gray-300 mt-3">Feels Like</p>
          <h3 className="text-2xl font-bold mt-2">{feelsLike}°</h3>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-5 text-center shadow-lg">
          <p className="text-lg font-semibold">Current</p>
          <h2 className="text-4xl font-bold mt-2">
            {temp}°
          </h2>
          <p>{weather}</p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;