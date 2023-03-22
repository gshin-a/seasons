import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link, useLocation } from "react-router-dom";

const Header = ({ isDarkMode, setIsDarkMode, type }) => {
  const location = useLocation();

  return (
    <div
      className={
        "header" + (isDarkMode ? " header-darkmode" : "") + ` header-${type}`
      }
    >
      <div className="header-logo">
        <span>Four Seasons</span>
      </div>
      <ul className="header-nav">
        <li>
          <Link
            to={"/"}
            className={location.pathname === "/" ? "curlocation" : ""}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to={"/spring"}
            className={location.pathname === "/spring" ? "curlocation" : ""}
          >
            SPRING
          </Link>
        </li>
        <li>
          <Link
            to={"/summer"}
            className={location.pathname === "/summer" ? "curlocation" : ""}
          >
            SUMMER
          </Link>
        </li>
        <li>
          <Link
            to={"/autumn"}
            className={location.pathname === "/autumn" ? "curlocation" : ""}
          >
            AUTUMN
          </Link>
        </li>
        <li>
          <Link
            to={"/winter"}
            className={location.pathname === "/winter" ? "curlocation" : ""}
          >
            WINTER
          </Link>
        </li>
      </ul>
      <div className="header-button">
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
