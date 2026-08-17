function RegisterVideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="public/videos/weather-login.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/60" />

      {/* Blue atmospheric overlay */}
      <div className="absolute inset-0 bg-blue-950/20" />

      {/* Blur */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </div>
  );
}

export default RegisterVideoBackground;