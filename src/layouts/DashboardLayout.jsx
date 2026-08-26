import Sidebar from "../components/sidebar";
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
  const [sidebarCollapsed, setSidebarCollapsed] =
    useState(false);
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <VideoBackground weather={weather} />
      <Sidebar
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        activePage={activePage}
        setActivePage={setActivePage}
      />
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
        <Topbar
          weather={weather}
          query={query}
          setQuery={setQuery}
          loading={loading}
          handleSubmit={handleSubmit}
          getCurrentLocation={getCurrentLocation}
          user={user}
        />
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