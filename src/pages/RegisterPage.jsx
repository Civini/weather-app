import { useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";

import {
  CloudSun,
  Loader2,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import LoginVideoBackground from "../components/LoginVideoBackground";
function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
  useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      setSuccess(
        "Account created successfully! You can now login."
      );

      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (err) {
      console.error("Registration error:", err);

      switch (err.code) {
        case "auth/email-already-in-use":
          setError(
            "An account already exists with this email."
          );
          break;

        case "auth/invalid-email":
          setError(
            "Please enter a valid email address."
          );
          break;

        case "auth/weak-password":
          setError(
            "Password is too weak. Use at least 6 characters."
          );
          break;

        case "auth/network-request-failed":
          setError(
            "Network error. Please check your internet connection."
          );
          break;

        default:
          setError(
            "Registration failed. Please try again."
          );
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      <LoginVideoBackground />

      {/* Dark overlay */}

      <div className="absolute inset-0 bg-black/10" />
      <div
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          justify-center
          px-4
          py-10
        "
      >
        <div
          className="
            w-full
            max-w-md

            rounded-3xl

            border
            border-white/20

            bg-white/10

            backdrop-blur-2xl

            shadow-2xl

            p-7
            sm:p-8
            md:p-10

            animate-[fadeIn_0.8s_ease-out]
          "
        >
          <div className="text-center mb-8">

            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                mb-5
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-center

                  w-14
                  h-14

                  rounded-2xl

                  bg-blue-600

                  shadow-lg
                  shadow-blue-500/30

                  animate-pulse
                "
              >

                <CloudSun
                  size={32}
                  className="text-white"
                />

              </div>


              <div className="text-left">

                <h2
                  className="
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  Weather
                </h2>

                <p
                  className="
                    text-sm
                    text-white/60
                  "
                >
                  Dashboard
                </p>

              </div>

            </div>
            <h1
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-white
                tracking-tight
              "
            >
              Create account
            </h1>


            <p
              className="
                mt-3
                text-white/65
              "
            >
              Join your personal weather companion
            </p>
          </div>
          {error && (
            <div
              className="
                mb-5
                rounded-xl
                border
                border-red-300/30
                bg-red-500/20
                px-4
                py-3
                text-sm
                text-red-100
                backdrop-blur-xl
              "
            >
              {error}
            </div>
          )}
          {success && (
            <div
              className="
                mb-5
                rounded-xl
                border
                border-green-300/30
                bg-green-500/20
                px-4
                py-3
                text-sm
                text-green-100
                backdrop-blur-xl
              "
            >
              {success}
            </div>
          )}
          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >
            {/* EMAIL */}

            <div>

              <label
                className="
                  block
                  mb-2
                  text-sm
                  font-medium
                  tracking-wide
                  text-white/80
                "
              >
                EMAIL
              </label>


              <div className="relative">

                <Mail
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
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  autoComplete="email"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/20
                    bg-slate-950/30
                    pl-12
                    pr-4
                    py-4
                    text-white
                    placeholder:text-white/40
                    outline-none
                    backdrop-blur-xl
                    transition
                    focus:border-blue-400
                    focus:ring-2
                    focus:ring-blue-400/20
                  "
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div>

              <label
                className="
                  block
                  mb-2
                  text-sm
                  font-medium
                  tracking-wide
                  text-white/80
                "
              >
                PASSWORD
              </label>


              <div className="relative">

                <Lock
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
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  autoComplete="new-password"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/20
                    bg-slate-950/30
                    pl-12
                    pr-12
                    py-4
                    text-white
                    placeholder:text-white/40
                    outline-none
                    backdrop-blur-xl
                    transition
                    focus:border-blue-400
                    focus:ring-2
                    focus:ring-blue-400/20
                  "
                />


                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-white/40
                    hover:text-white
                    transition
                  "
                >

                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}

                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}

            <div>

              <label
                className="
                  block
                  mb-2
                  text-sm
                  font-medium
                  tracking-wide
                  text-white/80
                "
              >
                CONFIRM PASSWORD
              </label>


              <div className="relative">

                <Lock
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
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  autoComplete="new-password"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/20
                    bg-slate-950/30
                    pl-12
                    pr-12
                    py-4
                    text-white
                    placeholder:text-white/40
                    outline-none
                    backdrop-blur-xl
                    transition
                    focus:border-blue-400
                    focus:ring-2
                    focus:ring-blue-400/20
                  "
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      (prev) => !prev
                    )
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-white/40
                    hover:text-white
                    transition
                  "
                >

                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}

                </button>

              </div>

            </div>
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                mt-3
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                px-5
                py-4
                text-lg
                font-bold
                text-white
                shadow-lg
                shadow-blue-500/20
                transition-all
                duration-300
                hover:scale-[1.01]
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >

              {loading ? (
                <>
                  <Loader2
                    size={22}
                    className="animate-spin"
                  />

                  Creating account...
                </>
              ) : (
                "Create Account"
              )}

            </button>

          </form>

          <div className="mt-7 text-center">

            <p className="text-white/60">

              Already have an account?{" "}

              <Link
                to="/login"
                className="
                  font-semibold
                  text-blue-300
                  hover:text-blue-200
                  transition
                "
              >
                Login
              </Link>

            </p>

          </div>


          {/* FOOTER */}

          <p
            className="
              mt-8
              text-center
              text-xs
              text-white/40
            "
          >
            Your personal weather companion
          </p>

        </div>

      </div>

    </div>
  );
}

export default RegisterPage;