import { useEffect, useRef, useState } from "react";
import {
  Search,
  MapPin,
  Bell,
  Settings,
  UserCircle,
  Menu,
  X,
  Check,
  LogOut,
} from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

import { useSettings } from "../context/SettingsContext";
import LanguageDropdown from "./LanguageDropdown";

function Topbar({
  user,
  query,
  setQuery,
  loading,
  handleSubmit,
  getCurrentLocation,
  setSidebarOpen,
}) {
  const { t } = useSettings();

  const [dateTime, setDateTime] = useState(new Date());

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const notificationRef = useRef(null);
  const settingsRef = useRef(null);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Weather Updated",
      message: "Weather information has been updated.",
      read: false,
    },
    {
      id: 2,
      title: "Location Ready",
      message: "Current location weather is available.",
      read: false,
    },
  ]);

  /* CLOCK */
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* CLOSE DROPDOWNS WHEN CLICKING OUTSIDE */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }

      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target)
      ) {
        setSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* LOGOUT */
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  /* NOTIFICATION BUTTON */
  const toggleNotifications = (event) => {
    event.stopPropagation();

    setNotificationOpen((prev) => !prev);
    setSettingsOpen(false);
  };

  /* SETTINGS BUTTON */
  const toggleSettings = (event) => {
    event.stopPropagation();

    setSettingsOpen((prev) => !prev);
    setNotificationOpen(false);
  };

  /* MARK NOTIFICATIONS READ */
  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        read: true,
      }))
    );
  };

  const unreadCount = notifications.filter(
    (item) => !item.read
  ).length;

  return (
    <header
      className="
        sticky
        top-0
        z-[100]

        h-24

        px-6
        lg:px-8

        flex
        items-center
        justify-between
        gap-5

        border-b
        border-white/10

        bg-slate-950/90
        backdrop-blur-xl
      "
    >
      {/* ================= LEFT ================= */}

      <div className="flex items-center gap-4 min-w-fit">
        {/* Mobile menu */}
        <button
          type="button"
          onClick={() => setSidebarOpen?.(true)}
          className="
            lg:hidden
            h-11
            w-11
            rounded-xl
            bg-white/10
            hover:bg-white/20
            flex
            items-center
            justify-center
            text-white
          "
        >
          <Menu size={21} />
        </button>

        {/* TITLE */}
        <div>
          <h1
            className="
              text-2xl
              lg:text-4xl
              font-bold
              text-white
              whitespace-nowrap
            "
          >
            🌤 Weather Dashboard
          </h1>

          <p className="text-xs lg:text-sm text-white/50">
            {dateTime.toLocaleDateString()} •{" "}
            {dateTime.toLocaleTimeString()}
          </p>
        </div>
      </div>

      {/* ================= SEARCH ================= */}

      <form
        onSubmit={handleSubmit}
        className="
          hidden
          lg:flex
          items-center
          gap-3
          flex-1
          justify-center
        "
      >
        <div className="relative">
          <Search
            size={20}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-white/40
            "
          />

          <input
            type="text"
            placeholder={t("searchCity")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-56
              xl:w-72

              pl-12
              pr-4
              py-3.5

              rounded-2xl

              bg-white/10
              border
              border-white/10

              text-white

              placeholder:text-white/40

              outline-none

              focus:border-blue-400
              focus:ring-2
              focus:ring-blue-400/20
            "
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
            px-5
            py-3

            rounded-xl

            bg-blue-600
            hover:bg-blue-500

            text-white
            font-semibold

            transition

            disabled:opacity-50
          "
        >
          {loading ? "..." : t("search")}
        </button>

        <button
          type="button"
          onClick={getCurrentLocation}
          title="Current location"
          className="
            h-14
            w-14

            rounded-2xl

            bg-green-600
            hover:bg-green-500

            flex
            items-center
            justify-center

            text-white
          "
        >
          <MapPin size={22} />
        </button>
      </form>

      {/* ================= RIGHT ================= */}

      <div className="flex items-center gap-3">

        {/* LANGUAGE */}

        <LanguageDropdown />

        {/* ========================================= */}
        {/* NOTIFICATION */}
        {/* ========================================= */}

        <div
          ref={notificationRef}
          className="relative"
        >
          <button
            type="button"
            onClick={toggleNotifications}
            className="
              relative

              h-12
              w-12

              rounded-2xl

              bg-white/10
              hover:bg-white/20

              flex
              items-center
              justify-center

              text-white

              transition

              cursor-pointer
            "
          >
            <Bell size={22} />

            {unreadCount > 0 && (
              <span
                className="
                  absolute
                  right-2
                  top-2

                  w-2.5
                  h-2.5

                  rounded-full

                  bg-red-500

                  ring-2
                  ring-slate-950
                "
              />
            )}
          </button>

          {/* NOTIFICATION PANEL */}

          {notificationOpen && (
            <div
              className="
                absolute
                right-0
                top-[60px]

                w-80

                rounded-2xl

                bg-slate-900

                border
                border-white/10

                shadow-2xl

                overflow-hidden

                z-[9999]
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between

                  px-5
                  py-4

                  border-b
                  border-white/10
                "
              >
                <div>
                  <h3 className="text-white font-semibold">
                    Notifications
                  </h3>

                  <p className="text-xs text-white/40 mt-1">
                    {unreadCount} unread
                  </p>
                </div>

                <button
                  type="button"
                  onClick={markAllRead}
                  className="
                    flex
                    items-center
                    gap-1

                    text-xs
                    text-blue-400

                    hover:text-blue-300
                  "
                >
                  <Check size={14} />

                  Read all
                </button>
              </div>

              {/* LIST */}

              <div className="max-h-72 overflow-y-auto">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    className={`
                      px-5
                      py-4

                      border-b
                      border-white/5

                      ${
                        !item.read
                          ? "bg-blue-500/10"
                          : ""
                      }
                    `}
                  >
                    <div className="flex gap-3">
                      <Bell
                        size={17}
                        className="text-blue-400 mt-1"
                      />

                      <div>
                        <p className="text-sm font-semibold text-white">
                          {item.title}
                        </p>

                        <p className="text-xs text-white/50 mt-1">
                          {item.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ========================================= */}
        {/* SETTINGS */}
        {/* ========================================= */}

        <div
          ref={settingsRef}
          className="relative"
        >
          <button
            type="button"
            onClick={toggleSettings}
            className="
              h-12
              w-12

              rounded-2xl

              bg-white/10
              hover:bg-white/20

              flex
              items-center
              justify-center

              text-white

              transition

              cursor-pointer
            "
          >
            <Settings
              size={22}
              className={`
                transition-transform
                duration-300

                ${
                  settingsOpen
                    ? "rotate-90"
                    : ""
                }
              `}
            />
          </button>

          {/* SETTINGS PANEL */}

          {settingsOpen && (
            <div
              className="
                absolute
                right-0
                top-[60px]

                w-80

                rounded-2xl

                bg-slate-900

                border
                border-white/10

                shadow-2xl

                overflow-hidden

                z-[9999]
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between

                  px-5
                  py-4

                  border-b
                  border-white/10
                "
              >
                <div>
                  <h3 className="text-white font-semibold">
                    Settings
                  </h3>

                  <p className="text-xs text-white/40 mt-1">
                    Dashboard preferences
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSettingsOpen(false)
                  }
                  className="
                    text-white/50
                    hover:text-white
                  "
                >
                  <X size={18} />
                </button>
              </div>

              {/* SETTINGS */}

              <div className="p-4 space-y-3">

                {/* TEMPERATURE */}

                <div
                  className="
                    flex
                    items-center
                    justify-between

                    p-4

                    rounded-xl

                    bg-white/5
                  "
                >
                  <div>
                    <p className="text-sm text-white">
                      Temperature
                    </p>

                    <p className="text-xs text-white/40">
                      Weather unit
                    </p>
                  </div>

                  <select
                    defaultValue="C"
                    className="
                      bg-slate-800
                      text-white

                      rounded-lg

                      px-3
                      py-2

                      outline-none
                    "
                  >
                    <option value="C">
                      °C
                    </option>

                    <option value="F">
                      °F
                    </option>
                  </select>
                </div>

                {/* NOTIFICATIONS */}

                <div
                  className="
                    flex
                    items-center
                    justify-between

                    p-4

                    rounded-xl

                    bg-white/5
                  "
                >
                  <div>
                    <p className="text-sm text-white">
                      Notifications
                    </p>

                    <p className="text-xs text-white/40">
                      Weather alerts
                    </p>
                  </div>

                  <div
                    className="
                      w-11
                      h-6

                      rounded-full

                      bg-blue-600

                      relative
                    "
                  >
                    <div
                      className="
                        absolute
                        right-1
                        top-1

                        w-4
                        h-4

                        rounded-full

                        bg-white
                      "
                    />
                  </div>
                </div>

                {/* ACCOUNT */}

                <div
                  className="
                    flex
                    items-center
                    gap-3

                    p-4

                    rounded-xl

                    bg-white/5
                  "
                >
                  <UserCircle
                    size={32}
                    className="text-blue-400"
                  />

                  <div className="min-w-0">
                    <p className="text-sm text-white">
                      Account
                    </p>

                    <p className="text-xs text-white/40 truncate">
                      {user?.email || "Guest"}
                    </p>
                  </div>
                </div>

                {/* CLOSE */}

                <button
                  type="button"
                  onClick={() =>
                    setSettingsOpen(false)
                  }
                  className="
                    w-full

                    py-3

                    rounded-xl

                    bg-white/10
                    hover:bg-white/20

                    text-white

                    transition
                  "
                >
                  Close Settings
                </button>
              </div>
            </div>
          )}
        </div>

        {/* USER */}

        <div
          className="
            hidden
            xl:flex

            items-center
            gap-3

            bg-white/10

            rounded-2xl

            px-4
            py-2.5
          "
        >
          <UserCircle
            size={40}
            className="text-white"
          />

          <div className="max-w-[170px]">
            <p className="text-xs text-white/40">
              {t("welcome")}
            </p>

            <p className="text-sm text-white font-semibold truncate">
              {user?.email || "Guest"}
            </p>
          </div>
        </div>

        {/* LOGOUT */}

        <button
          type="button"
          onClick={handleLogout}
          title={t("logout")}
          className="
            hidden
            xl:flex

            h-12
            w-12

            rounded-2xl

            bg-red-500/10
            hover:bg-red-500/20

            border
            border-red-400/10

            items-center
            justify-center

            text-red-300
          "
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}
export default Topbar;