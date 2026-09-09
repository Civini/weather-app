 function VideoBackground({ weather }) {
  const condition =
    weather?.weather?.[0]?.main?.toLowerCase() || "clouds";

  const getVideo = () => {
    switch (condition) {
      case "clear":
        return `${import.meta.env.BASE_URL}videos/sunny.mp4`;

      case "clouds":
        return `${import.meta.env.BASE_URL}videos/cloudy.mp4`;

      case "rain":
      case "drizzle":
        return `${import.meta.env.BASE_URL}videos/rain.mp4`;

      case "thunderstorm":
        return `${import.meta.env.BASE_URL}videos/thunder.mp4`;

      case "snow":
        return `${import.meta.env.BASE_URL}videos/snow.mp4`;

      default:
        return `${import.meta.env.BASE_URL}videos/cloudy.mp4`;
    }
  };

  const video = getVideo();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        key={video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />
    </div>
  );
}

export default VideoBackground;
