function LoginVideoBackground() {
  const video = `${import.meta.env.BASE_URL}videos/weather-login.mp4`;
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
export default LoginVideoBackground;
