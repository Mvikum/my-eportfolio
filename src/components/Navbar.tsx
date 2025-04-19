import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link
        to="/"
        className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/projects"
        className={`nav-link ${
          location.pathname === "/projects" ? "active" : ""
        }`}
      >
        Projects
      </Link>
    </nav>
  );
}
