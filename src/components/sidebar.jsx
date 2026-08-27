import {
  LayoutDashboard,
  CalendarDays,
  Clock,
  ChartLine,
  Sunrise,
  Wind,
  Map,
  Heart,
  Bot,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useSettings } from "../context/SettingsContext";

function Sidebar({
  sidebarCollapsed,
  setSidebarCollapsed,
  activePage,
  setActivePage,
}) {
  const { t } = useSettings();

  const menuItems = [
    {
      id: "home",
      label: t("dashboard"),
      icon: LayoutDashboard,
    },
    {
      id: "forecast",
      label: t("forecast"),
      icon: CalendarDays,
    },
    {
      id: "hourly",
      label: t("hourly"),
      icon: Clock,
    },
    {
      id: "chart",
      label: t("charts"),
      icon: ChartLine,
    },
    {
      id: "sunrise",
      label: t("sunrise"),
      icon: Sunrise,
    },
    {
      id: "aqi",
      label: t("airQuality"),
      icon: Wind,
    },
    {
      id: "map",
      label: t("maps"),
      icon: Map,
    },
    {
      id: "favorites",
      label: t("favorites"),
      icon: Heart,
    },
    {
      id: "chat",
      label: t("aiChat"),
      icon: Bot,
    },
  ];

  const handleNavigation = (id) => {
    setActivePage(id);
  };

  return (
    <aside
      className={`
        fixed
        left-0
        top-0
        z-[200]

        h-screen

        bg-slate-950/95
        backdrop-blur-xl

        border-r
        border-white/10

        transition-all
        duration-300
        ease-in-out

        ${sidebarCollapsed ? "w-24" : "w-80"}

        hidden
        md:flex

        flex-col
      `}
    >
      <div
        className={`
          relative

          flex
          items-center

          h-36

          border-b
          border-white/10

          transition-all
          duration-300

          ${
            sidebarCollapsed
              ? "justify-center px-3"
              : "justify-start px-8"
          }
        `}
      >
        {/* Logo */}

        <div
          className={`
            flex
            items-center

            transition-all
            duration-300

            ${
              sidebarCollapsed
                ? "justify-center"
                : "gap-4"
            }
          `}
        >
          <div
            className="
              h-16
              w-16

              shrink-0

              rounded-2xl

              bg-blue-600

              flex
              items-center
              justify-center

              shadow-lg
              shadow-blue-600/30
            "
          >
            <span className="text-4xl">
              🌤️
            </span>
          </div>

          {/* Title */}

          {!sidebarCollapsed && (
            <div className="overflow-hidden">
              <h2
                className="
                  text-3xl
                  font-bold
                  text-white
                  whitespace-nowrap
                "
              >
                Weather
              </h2>

              <p
                className="
                  text-base
                  text-white/50
                  whitespace-nowrap
                "
              >
                Dashboard
              </p>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() =>
            setSidebarCollapsed((prev) => !prev)
          }
          title={
            sidebarCollapsed
              ? "Expand sidebar"
              : "Collapse sidebar"
          }
          className={`
            absolute

            top-1/2
            -translate-y-1/2

            translate-x-1/2

            right-0

            z-[300]

            h-12
            w-12

            rounded-full

            bg-blue-600
            hover:bg-blue-500

            border-2
            border-white

            shadow-lg
            shadow-blue-600/30

            flex
            items-center
            justify-center

            text-white

            transition-all
            duration-200

            hover:scale-105
          `}
        >
          {sidebarCollapsed ? (
            <ChevronRight size={24} />
          ) : (
            <ChevronLeft size={24} />
          )}
        </button>
      </div>
      <nav
        className="
          flex-1

          overflow-y-auto
          overflow-x-hidden

          px-4
          py-5

          scrollbar-thin
          scrollbar-thumb-white/20
        "
      >
        <div className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              activePage === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  handleNavigation(item.id)
                }
                title={
                  sidebarCollapsed
                    ? item.label
                    : undefined
                }
                className={`
                  w-full

                  h-14

                  flex
                  items-center

                  rounded-2xl

                  transition-all
                  duration-200

                  ${
                    sidebarCollapsed
                      ? "justify-center px-0"
                      : "justify-start gap-4 px-5"
                  }

                  ${
                    active
                      ? `
                        bg-blue-600
                        text-white
                        shadow-lg
                        shadow-blue-600/25
                      `
                      : `
                        text-white/65
                        hover:bg-white/10
                        hover:text-white
                      `
                  }
                `}
              >
                <Icon
                  size={24}
                  strokeWidth={1.8}
                  className="shrink-0"
                />

                {!sidebarCollapsed && (
                  <span
                    className="
                      text-base
                      font-semibold
                      whitespace-nowrap
                    "
                  >
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;