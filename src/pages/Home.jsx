import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">

      <div className="hero-illustration">

        <svg
          width="180"
          height="180"
          viewBox="0 0 180 180"
          fill="none"
        >
          <circle
            cx="90"
            cy="95"
            r="70"
            fill="#dbeafe"
          />

          <rect
            x="55"
            y="35"
            width="70"
            height="100"
            rx="10"
            fill="#ffffff"
            stroke="#2563eb"
            strokeWidth="5"
          />

          <rect
            x="75"
            y="28"
            width="30"
            height="14"
            rx="6"
            fill="#2563eb"
          />

          {[52, 74, 96, 118].map((y) => (
            <g key={y}>

              <rect
                x="66"
                y={y}
                width="16"
                height="16"
                rx="4"
                fill="#2563eb"
              />

              <path
                d={`M69 ${y + 8} l3 3 l6 -6`}
                stroke="#ffffff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <rect
                x="90"
                y={y + 3}
                width="24"
                height="6"
                rx="3"
                fill="#bfdbfe"
              />

            </g>
          ))}

          <rect
            x="120"
            y="95"
            width="8"
            height="35"
            rx="4"
            fill="#16a34a"
          />

          <ellipse
            cx="124"
            cy="90"
            rx="20"
            ry="14"
            fill="#4ade80"
          />

          <path
            d="M110 145 h30 l-4 20 h-22 z"
            fill="#0f766e"
          />

        </svg>

      </div>

      <h1 className="hero-title">
        Welcome to{" "}
        <span className="brand-highlight">
          TaskManager
        </span>
      </h1>

      <p className="hero-subtitle">
        Stay organized, get things done!
      </p>

      <p className="hero-description">
        A simple and easy-to-use task manager to help you
        plan your day, track your progress and achieve
        your goals.
      </p>

      {/* IMPORTANT */}
      <button
        className="dashboard-get-started"
        onClick={() => navigate("/tasks")}
      >
        Get Started →
      </button>

    </div>
  );
}

export default Home;