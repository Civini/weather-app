import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import VideoBackground from "../components/VideoBackground";

import { useState } from "react";

function DashboardLayout({
  children,
  weather,
  query,
  setQuery,
  loading,
  handleSubmit,
  getCurrentLocation,
  user,
  activePage,
  setActivePage,
}) {
  /* ===================================== */
  /* SIDEBAR COLLAPSE STATE */
  /* ===================================== */

  const [sidebarCollapsed, setSidebarCollapsed] =
    useState(false);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* ===================================== */}
      {/* WEATHER BACKGROUND */}
      {/* ===================================== */}

      <VideoBackground weather={weather} />

      {/* ===================================== */}
      {/* SIDEBAR */}
      {/* ===================================== */}

      <Sidebar
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* ===================================== */}
      {/* MAIN AREA */}
      {/* ===================================== */}

      <div
        className={`
          relative
          z-10

          min-h-screen

          transition-all
          duration-300
          ease-in-out

          ${
            sidebarCollapsed
              ? "md:ml-24"
              : "md:ml-80"
          }
        `}
      >
        {/* ================================= */}
        {/* TOPBAR */}
        {/* ================================= */}

        <Topbar
          weather={weather}
          query={query}
          setQuery={setQuery}
          loading={loading}
          handleSubmit={handleSubmit}
          getCurrentLocation={getCurrentLocation}
          user={user}
        />

        {/* ================================= */}
        {/* PAGE CONTENT */}
        {/* ================================= */}

        <main
          className="
            min-h-[calc(100vh-96px)]

            p-4
            sm:p-6
            lg:p-8
            xl:p-10
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;