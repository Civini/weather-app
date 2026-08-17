import { createContext, useContext, useState } from "react";
import translations from "../utils/translations";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("weather-language") || "en"
  );

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("weather-language", newLanguage);
  };

  const t = (key) => {
    return (
      translations[language]?.[key] ||
      translations.en?.[key] ||
      key
    );
  };

  const value = {
    language,
    setLanguage,
    changeLanguage,
    t,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "useSettings must be used inside SettingsProvider"
    );
  }

  return context;
}