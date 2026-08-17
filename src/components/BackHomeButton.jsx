import { ArrowLeft } from "lucide-react";

function BackHomeButton({ setActivePage }) {
  const handleBack = () => {
    if (typeof setActivePage === "function") {
      setActivePage("home");
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="
        mb-8
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/10
        bg-white/10
        px-6
        py-3
        text-white
        backdrop-blur-xl
        transition-all
        duration-200
        hover:bg-white/20
        hover:scale-[1.02]
        active:scale-95
      "
    >
      <ArrowLeft size={22} />
      <span className="text-lg">Back to Home</span>
    </button>
  );
}

export default BackHomeButton;