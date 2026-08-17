function FavoriteCities({
  favorites,
  getWeather,
  removeFavorite,
}) {
  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold text-center text-white mb-6">
        ❤️ Favorite Cities
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {favorites.map((city) => (
          <div
            key={city}
            className="bg-white/20 backdrop-blur-lg rounded-2xl px-6 py-4 text-white shadow-lg flex items-center gap-3"
          >
            <button
              onClick={() => getWeather(city)}
              className="font-semibold"
            >
              📍 {city}
            </button>

            <button
              onClick={() => removeFavorite(city)}
              className="text-red-400 hover:text-red-600"
            >
              ✖
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default FavoriteCities;