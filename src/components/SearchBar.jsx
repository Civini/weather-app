import { Search, Loader2 } from "lucide-react";

function SearchBar({
  query,
  setQuery,
  loading,
  handleSubmit,
  getCurrentLocation,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center gap-4 mt-8 flex-wrap"
    >
      {/* Search Input */}
      <input
        type="text"
        placeholder="🔍 Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          w-96
          px-5
          py-4
          rounded-2xl
          bg-white/20
          backdrop-blur-lg
          border
          border-white/30
          text-white
          placeholder-white/70
          shadow-xl
          outline-none
          focus:ring-2
          focus:ring-white/50
          transition-all
        "
      />

      {/* Search Button */}
      <button
        type="submit"
        disabled={loading}
        className="
          px-6
          py-4
          rounded-2xl
          bg-blue-600/80
          backdrop-blur-lg
          border
          border-white/30
          text-white
          font-semibold
          shadow-xl
          hover:bg-blue-700
          transition-all
          duration-300
          flex
          items-center
          gap-2
        "
      >
        {loading ? (
          <Loader2 className="animate-spin w-5 h-5" />
        ) : (
          <>
            <Search className="w-5 h-5" />
            Search
          </>
        )}
      </button>

      {/* Current Location Button */}
      <button
        type="button"
        onClick={getCurrentLocation}
        className="
          px-6
          py-4
          rounded-2xl
          bg-green-600/80
          backdrop-blur-lg
          border
          border-white/30
          text-white
          font-semibold
          shadow-xl
          hover:bg-green-700
          transition-all
          duration-300
        "
      >
        📍 My Location
      </button>
    </form>
  );
}

export default SearchBar;