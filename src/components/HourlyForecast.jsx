function HourlyForecast({ hourly }) {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        🕒 Next 24 Hours
      </h2>

      <div className="flex justify-center gap-4 overflow-x-auto pb-4">
        {hourly.map((hour, index) => (
          <div
            key={index}
            className="
              min-w-[88px]
              bg-white/15
              backdrop-blur-xl
              rounded-2xl
              px-4
              py-4
              text-center
              text-white
              shadow-lg
              hover:bg-white/13
              transition-all
              duration-300
            "
          >
             <p className="text-lg font-semibold">
  {hour.time}
</p>

<img
  src={`https://openweathermap.org/img/wn/${hour.icon}@2x.png`}
  alt={hour.weather}
  className="w-14 h-14 mx-auto my-2"
/>

<p className="text-2xl font-bold">
  {hour.temp}°
</p>

<p className="text-sm text-white/80">
  {hour.weather}
</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HourlyForecast;