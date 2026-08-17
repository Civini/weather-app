function LoginVideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/sunny.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-blue-950/20" />
    </div>
  );
}

export default LoginVideoBackground;