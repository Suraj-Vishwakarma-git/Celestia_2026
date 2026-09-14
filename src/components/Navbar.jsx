import {
  Gamepad2,
  Home,
  Trophy,
  Menu,
  X
} from "lucide-react";

import { Link } from "react-router-dom";

const links = [
  {
    label: "HOME",
    icon: Home
  },
  {
    label: "GAMES",
    icon: Gamepad2
  },
  {
    label: "LEADERBOARD",
    icon: Trophy,
    active: true
  }
];

export default function Navbar({ open, setOpen }) {
  return (
    <header className="top-nav">

      {/* BRAND */}
      <div className="brand">

        <span className="brand-play">
          CELES
        </span>

        <span className="brand-verse">
          TIA
        </span>
      </div>


      {/* MOBILE MENU BUTTON */}
      <button
        className="mobile-menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? (
          <X size={24} />
        ) : (
          <Menu size={24} />
        )}
      </button>


      {/* NAVIGATION */}
      <nav
        className={`nav-links ${
          open ? "nav-open" : ""
        }`}
      >

        {links.map(
          ({ label, icon: Icon, active }) => {

            if (label === "HOME") {
              return (
                <Link
                  key={label}
                  className="nav-link"
                  to="/"
                  onClick={() => setOpen(false)}
                >
                  <Icon
                    size={18}
                    strokeWidth={2.5}
                  />

                  <span>{label}</span>
                </Link>
              );
            }

            return (
              <a
                key={label}
                className={
                  active
                    ? "nav-link active"
                    : "nav-link"
                }
                href={`#${label.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                <Icon
                  size={18}
                  strokeWidth={2.5}
                />

                <span>{label}</span>
              </a>
            );
          }
        )}

      </nav>

    </header>
  );
}

