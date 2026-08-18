import { useEffect, useState } from "react";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import DashboardLayout from "./layouts/DashboardLayout";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import HomePage from "./pages/HomePage";
import ForeCastPage from "./pages/ForeCastPage";
import HourlyPage from "./pages/HourlyPage";
import ChartPage from "./pages/ChartPage";
import SunrisePage from "./pages/SunrisePage";
import AQIPage from "./pages/AQIPage";
import MapPage from "./pages/MapPage";
import FavoritesPage from "./pages/FavoritesPage";
import ChatPage from "./pages/ChatPage";

import useFavorites from "./hooks/useFavorites";
import useWeather from "./hooks/useWeather";


function AuthenticatedApp() {
  const [query, setQuery] = useState("");
  const [activePage, setActivePage] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user } = useAuth();

  const {
    weather,
    forecast,
    hourly,
    aqi,
    loading,
    getWeather,
    getCurrentLocation,
  } = useWeather();

  const {
    favorites,
    addFavorite,
    removeFavorite,
  } = useFavorites();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      return;
    }

    getWeather(query);
    setQuery("");
  };


  useEffect(() => {
    getCurrentLocation();
  }, []);


  return (
    <DashboardLayout
      weather={weather}
      query={query}
      setQuery={setQuery}
      loading={loading}
      handleSubmit={handleSubmit}
      getCurrentLocation={getCurrentLocation}
      user={user}
      activePage={activePage}
      setActivePage={setActivePage}
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
    >
      {/* HOME */}
      {activePage === "home" && (
        <HomePage
          weather={weather}
          forecast={forecast}
          addFavorite={addFavorite}
          favorites={favorites}
          setActivePage={setActivePage}
        />
      )}


      {/* FORECAST */}

      {activePage === "forecast" && (
        <ForeCastPage
          forecast={forecast}
          setActivePage={setActivePage}
        />
      )}


      {/* HOURLY */}

      {activePage === "hourly" && (
        <HourlyPage
          hourly={hourly}
          weather={weather}
          setActivePage={setActivePage}
        />
      )}


      {/* CHART */}

      {activePage === "chart" && (
        <ChartPage
          hourly={hourly}
          weather={weather}
          setActivePage={setActivePage}
        />
      )}
      {/* SUNRISE */}
       {activePage === "sunrise" && weather && (
         <SunrisePage weather={weather} />
       )}
      {/* AQI */}
      {activePage === "aqi" && (
        <AQIPage
          weather={weather}
          aqi={aqi}
          setActivePage={setActivePage}
        />
      )}
      {/* MAP */}
      {activePage === "map" && weather && (
        <MapPage
          weather={weather}
          setActivePage={setActivePage}
        />
      )}
      {/* FAVORITES */}
      {activePage === "favorites" && (
        <FavoritesPage
          favorites={favorites}
          removeFavorite={removeFavorite}
          setActivePage={setActivePage}
        />
      )}
      {/* AI CHAT */}
      {activePage === "chat" && (
        <ChatPage
          weather={weather}
          setActivePage={setActivePage}
        />
      )}
    </DashboardLayout>
  );
}
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
function App() {
  return (
    <Routes>

      {/* LOGIN */}

      <Route
        path="/login"
        element={<LoginPage />}
      />
      {/* REGISTER */}
      <Route
        path="/register"
        element={<RegisterPage />}
      />
      {/* PROTECTED DASHBOARD */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <AuthenticatedApp />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}
export default App;