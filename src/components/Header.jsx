import { NavLink } from "react-router-dom";

function Header() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div>
        <div className="sidebar-brand">
          <span className="brand-icon">✓</span>

          <span>
            Task<span className="brand-highlight">Manager</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span>⌂</span>
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span>▣</span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span>☷</span>
            <span>Tasks</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span>♙</span>
            <span>Profile</span>
          </NavLink>

        </nav>
      </div>

      {/* Bottom profile */}
      <div className="sidebar-footer">

        <span className="avatar">
          👤
        </span>

        <div>
          <div className="footer-title">
            BSc IT Student
          </div>

          <div className="footer-sub">
            Build · Learn · Grow
          </div>
        </div>

      </div>

    </aside>
  );
}

export default Header;