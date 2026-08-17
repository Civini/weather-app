export function buildForecast(list = []) {
  if (!Array.isArray(list)) {
    return [];
  }
  const grouped = {};
  list.forEach((item) => {
    if (!item?.dt) return;
    const date = new Date(item.dt * 1000);
    const key = date.toLocaleDateString("en-CA");
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item);
  });
  return Object.values(grouped)
    .slice(0, 5)
    .map((items) => {
      const selected = [...items].sort((a, b) => {
        const hourA = new Date(a.dt * 1000).getHours();
        const hourB = new Date(b.dt * 1000).getHours();
        return (
          Math.abs(hourA - 12) -
          Math.abs(hourB - 12)
        );
      })[0];

      const temperatures = items
        .map((item) => item.main?.temp)
        .filter(
          (temp) => typeof temp === "number"
        );

      const humidityValues = items
        .map((item) => item.main?.humidity)
        .filter(
          (value) => typeof value === "number"
        );

      const windValues = items
        .map((item) => item.wind?.speed)
        .filter(
          (value) => typeof value === "number"
        );

      const minTemp = temperatures.length
        ? Math.min(...temperatures)
        : selected.main?.temp;

      const maxTemp = temperatures.length
        ? Math.max(...temperatures)
        : selected.main?.temp;

      const humidity = humidityValues.length
        ? Math.round(
            humidityValues.reduce(
              (sum, value) => sum + value,
              0
            ) / humidityValues.length
          )
        : null;

      const wind = windValues.length
        ? (
            windValues.reduce(
              (sum, value) => sum + value,
              0
            ) / windValues.length
          ).toFixed(1)
        : null;

      return {
        dt: selected.dt,

        date: new Date(
          selected.dt * 1000
        ),

        condition:
          selected.weather?.[0]?.main ||
          "Clouds",
        description:
          selected.weather?.[0]?.description ||
          "Weather",
        icon:
          selected.weather?.[0]?.icon,
        minTemp,
        maxTemp,
        humidity,
        wind,
      };
    });
}
export function buildHourlyForecast(list = []) {
  if (!Array.isArray(list)) {
    return [];
  }

  return list
    .filter((item) => item?.dt)
    .slice(0, 8)
    .map((item) => {
      return {
        dt: item.dt,
        date: new Date(item.dt * 1000),
        temp:
          typeof item.main?.temp === "number"
            ? item.main.temp
            : null,

        feelsLike:
          typeof item.main?.feels_like === "number"
            ? item.main.feels_like
            : null,

        humidity:
          typeof item.main?.humidity === "number"
            ? item.main.humidity
            : null,

        pressure:
          typeof item.main?.pressure === "number"
            ? item.main.pressure
            : null,

        wind:
          typeof item.wind?.speed === "number"
            ? item.wind.speed
            : null,

        windDeg:
          typeof item.wind?.deg === "number"
            ? item.wind.deg
            : null,

        condition:
          item.weather?.[0]?.main ||
          "Clouds",

        description:
          item.weather?.[0]?.description ||
          "Weather",

        icon:
          item.weather?.[0]?.icon ||
          null,

        precipitation:
          item.pop !== undefined
            ? Math.round(item.pop * 100)
            : 0,
      };
    });
}