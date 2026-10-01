import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useState } from "react";

import Header from "./components/Header";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";

import "./App.css";


/* =========================
   SIGN IN / REGISTER MODAL
========================= */

function AuthModal({
  mode,
  onClose,
  onLogin,
}) {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");


  const isRegister =
    mode === "register";


  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !email.trim() ||
      !password.trim()
    ) {
      return;
    }


    const userName =
      isRegister && name.trim()
        ? name.trim()
        : email.split("@")[0];


    onLogin({
      name: userName,
      email,
    });


    onClose();
  };


  return (
    <div
      className="auth-overlay"
      onClick={onClose}
    >

      <div
        className="auth-modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <button
          className="auth-close"
          type="button"
          onClick={onClose}
        >
          ×
        </button>


        <div className="auth-icon">
          ✓
        </div>


        <h2>
          {isRegister
            ? "Create an Account"
            : "Welcome Back"}
        </h2>


        <p className="auth-subtitle">
          {isRegister
            ? "Create your TaskManager account."
            : "Sign in to manage your tasks."}
        </p>


        <form
          onSubmit={handleSubmit}
        >

          {isRegister && (
            <div className="auth-field">

              <label>
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Smith"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
              />

            </div>
          )}


          <div className="auth-field">

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>


          <div className="auth-field">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </div>


          <button
            type="submit"
            className="auth-submit"
          >
            {isRegister
              ? "Create Account"
              : "Sign In"}
          </button>

        </form>

      </div>

    </div>
  );
}


/* =========================
   APP CONTENT
========================= */

function AppContent() {

  const location =
    useLocation();


  const [user, setUser] =
    useState(null);


  const [authMode, setAuthMode] =
    useState(null);


  const isHome =
    location.pathname === "/";


  const handleLogin =
    (userData) => {
      setUser(userData);
    };


  const handleLogout = () => {
    setUser(null);
  };


  return (
    <div className="app-shell">

      {/* SIDEBAR */}
      <Header />


      <div className="main-column">

        {/* TOP BAR */}

        <div className="topbar">

          {isHome ? (

            <div className="home-auth-buttons">

              <button
                className="topbar-login"
                type="button"
                onClick={() =>
                  setAuthMode("login")
                }
              >
                Sign In
              </button>


              <button
                className="topbar-register"
                type="button"
                onClick={() =>
                  setAuthMode("register")
                }
              >
                Register
              </button>

            </div>

          ) : (

            <div className="topbar-user-area">

              <div className="topbar-user">

                <span className="avatar">
                  👤
                </span>

                {user?.name ||
                  "John Smith"}

              </div>


              {user && (
                <button
                  className="topbar-logout"
                  type="button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}

            </div>

          )}

        </div>


        {/* PAGE AREA */}

        <main className="page-content">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />


            <Route
              path="/dashboard"
              element={<Dashboard />}
            />


            <Route
              path="/tasks"
              element={<Tasks />}
            />


            <Route
              path="/profile"
              element={<Profile />}
            />

          </Routes>

        </main>

      </div>


      {/* AUTH MODAL */}

      {authMode && (
        <AuthModal
          mode={authMode}
          onClose={() =>
            setAuthMode(null)
          }
          onLogin={handleLogin}
        />
      )}

    </div>
  );
}


/* =========================
   APP
========================= */

function App() {

  return (
    <BrowserRouter>

      <AppContent />

    </BrowserRouter>
  );
}

export default App;