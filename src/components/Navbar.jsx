import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import {
  CloudSun,
  CalendarDays,
  Clock3,
  LogOut,
  UserCircle2,
} from "lucide-react";

function Navbar() {
  const [dateTime, setDateTime] = useState(new Date());
  const { user } = useAuth();

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <header className="mx-6 mt-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 px-8 py-6">

        {/* Left */}
        <div className="flex items-center gap-4">

          <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
            <CloudSun className="text-white" size={34} />
          </div>

          <div>
            <h1 className="text-4xl font-extrabold text-white">
              Weather Forecast
            </h1>

            <p className="text-white/70">
              Real-Time Weather Dashboard
            </p>
          </div>

        </div>

        {/* Center */}
        <div className="flex gap-8">

          <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-2xl">

            <CalendarDays className="text-cyan-300" />

            <div>

              <p className="text-xs text-white/60">
                Today
              </p>

              <p className="text-white font-semibold">
                {dateTime.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-2xl">

            <Clock3 className="text-cyan-300" />

            <div>

              <p className="text-xs text-white/60">
                Local Time
              </p>

              <p className="text-white font-bold text-xl">
                {dateTime.toLocaleTimeString()}
              </p>

            </div>

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-5 py-3">

            <UserCircle2 size={40} className="text-cyan-300" />

            <div>

              <p className="text-xs text-white/60">
                Logged in as
              </p>

              <p className="text-white font-semibold">
                {user?.email}
              </p>

            </div>

          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-all duration-300 px-5 py-3 rounded-2xl font-semibold shadow-lg"
          >
            <LogOut size={20} />
            Logout
          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;