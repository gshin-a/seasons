import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ isDarkMode, setIsDarkMode, type }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={
        "header" + (isDarkMode ? " header-darkmode" : "") + ` header-${type}`
      }
    >
      <div className="header-logo">
        <Link to={"/"}>Four Seasons</Link>
      </div>
      <ul className="header-nav">
        <li className="header-nav-menu">
          <Link to={"/spring/intro"} className="header-nav-link">
            SPRING
          </Link>
          <ul className="header-nav-submenu">
            <li onClick={() => navigate("/spring/intro")}>
              &raquo; Introduction
            </li>
            <li onClick={() => navigate("/spring/activity")}>
              &raquo; Activities
            </li>
            <li onClick={() => navigate("/spring/tip")}>&raquo; Tips</li>
            <li onClick={() => navigate("/spring/gallery")}>&raquo; Gallery</li>
            <li onClick={() => navigate("/spring/board")}>&raquo; Board</li>
          </ul>
        </li>
        <li className="header-nav-menu">
          <Link to={"/summer/intro"} className="header-nav-link">
            SUMMER
          </Link>
          <ul className="header-nav-submenu">
            <li onClick={() => navigate("/summer/intro")}>
              &raquo; Introduction
            </li>
            <li onClick={() => navigate("/summer/activity")}>
              &raquo; Activities
            </li>
            <li onClick={() => navigate("/summer/tip")}>&raquo; Tips</li>
            <li onClick={() => navigate("/summer/gallery")}>&raquo; Gallery</li>
            <li onClick={() => navigate("/summer/board")}>&raquo; Board</li>
          </ul>
        </li>
        <li className="header-nav-menu">
          <Link to={"/autumn/intro"} className="header-nav-link">
            AUTUMN
          </Link>
          <ul className="header-nav-submenu">
            <li onClick={() => navigate("/autumn/intro")}>
              &raquo; Introduction
            </li>
            <li onClick={() => navigate("/autumn/activity")}>
              &raquo; Activities
            </li>
            <li onClick={() => navigate("/autumn/tip")}>&raquo; Tips</li>
            <li onClick={() => navigate("/autumn/gallery")}>&raquo; Gallery</li>
            <li onClick={() => navigate("/autumn/board")}>&raquo; Board</li>
          </ul>
        </li>
        <li className="header-nav-menu">
          <Link to={"/winter/intro"} className="header-nav-link">
            WINTER
          </Link>
          <ul className="header-nav-submenu">
            <li onClick={() => navigate("/winter/intro")}>
              &raquo; Introduction
            </li>
            <li onClick={() => navigate("/winter/activity")}>
              &raquo; Activities
            </li>
            <li onClick={() => navigate("/winter/tip")}>&raquo; Tips</li>
            <li onClick={() => navigate("/winter/gallery")}>&raquo; Gallery</li>
            <li onClick={() => navigate("/winter/board")}>&raquo; Board</li>
          </ul>
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
