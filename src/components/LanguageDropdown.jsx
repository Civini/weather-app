import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useSettings } from "../context/SettingsContext";

function LanguageDropdown() {
  const { language, changeLanguage } = useSettings();

  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "te", name: "తెలుగు" },
    { code: "hi", name: "हिन्दी" },
    { code: "ta", name: "தமிழ்" },
    { code: "bn", name: "বাংলা" },
    { code: "kn", name: "ಕನ್ನಡ" },
    { code: "ml", name: "മലയാളം" },
  ];

  const selectedLanguage =
    languages.find((item) => item.code === language) ||
    languages[0];

  const handleLanguageChange = (code) => {
    changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          gap-2

          h-11
          px-3

          rounded-2xl

          bg-white/10
          hover:bg-white/20

          border
          border-white/10

          text-white

          transition
        "
      >
        <Globe size={19} />

        <span className="hidden sm:block text-sm font-medium">
          {selectedLanguage.code.toUpperCase()}
        </span>

        <ChevronDown
          size={16}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <>
          {/* Outside click layer */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          <div
            className="
              absolute
              right-0
              top-14
              z-50

              w-48

              rounded-2xl

              border
              border-white/10

              bg-slate-950/95
              backdrop-blur-xl

              shadow-2xl

              p-2
            "
          >
            <p
              className="
                px-3
                py-2

                text-xs
                font-semibold

                uppercase
                tracking-wider

                text-white/40
              "
            >
              Language
            </p>

            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() =>
                  handleLanguageChange(item.code)
                }
                className={`
                  w-full

                  flex
                  items-center
                  justify-between

                  px-3
                  py-2.5

                  rounded-xl

                  text-left

                  transition

                  ${
                    language === item.code
                      ? "bg-blue-600 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <span>{item.name}</span>

                <span className="text-xs opacity-50">
                  {item.code.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default LanguageDropdown;