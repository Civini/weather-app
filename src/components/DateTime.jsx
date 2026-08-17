import { useState, useEffect } from "react";

function DateTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
return (
  <div className="w-fit mx-auto mt-6 bg-white/20 backdrop-blur-lg rounded-2xl px-8 py-4 shadow-lg text-white">
    <h2 className="text-xl font-semibold">
      {time.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </h2>

    <p className="text-4xl font-bold mt-2">
      {time.toLocaleTimeString()}
    </p>
  </div>
);
}