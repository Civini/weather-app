function VideoBackground({ weather }) {
  const condition =
    weather?.weather?.[0]?.main?.toLowerCase() || "clouds";

  const getVideo = () => {
    switch (condition) {
      case "clear":
        return "/videos/sunny.mp4";

      case "clouds":
        return "/videos/cloudy.mp4";

      case "rain":
      case "drizzle":
        return "/videos/rain.mp4";

      case "thunderstorm":
        return "/videos/thunderstorm.mp4";

      case "snow":
        return "/videos/snow.mp4";

      default:
        return "/videos/cloudy.mp4";
    }
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        key={getVideo()}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={getVideo()} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />
    </div>
  );
}

export default VideoBackground;