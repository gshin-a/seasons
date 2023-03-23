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
        <li className={location.pathname === "/" ? "curlocation" : ""}>
          <Link to={"/"}>HOME</Link>
        </li>
        <li className={location.pathname === "/spring" ? "curlocation" : ""}>
          <Link to={"/spring"}>SPRING</Link>
        </li>
        <li className={location.pathname === "/summer" ? "curlocation" : ""}>
          <Link to={"/summer"}>SUMMER</Link>
        </li>
        <li className={location.pathname === "/autumn" ? "curlocation" : ""}>
          <Link to={"/autumn"}>AUTUMN</Link>
        </li>
        <li className={location.pathname === "/winter" ? "curlocation" : ""}>
          <Link to={"/winter"}>WINTER</Link>
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
