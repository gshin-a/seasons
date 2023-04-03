import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link, useNavigate, useLocation } from "react-router-dom";

const seasonList = ["spring", "summer", "autumn", "winter"];

const Submenu = ({ season }) => {
  const navigate = useNavigate();

  return (
    <ul className="header-nav-submenu">
      <li onClick={() => navigate(`/${season}/intro`)}>&raquo; Introduction</li>
      <li onClick={() => navigate(`/${season}/activity`)}>
        &raquo; Activities
      </li>
      <li onClick={() => navigate(`/${season}/tip`)}>&raquo; Tips</li>
      <li onClick={() => navigate(`/${season}/gallery`)}>&raquo; Gallery</li>
      <li onClick={() => navigate(`/${season}/board`)}>&raquo; Board</li>
    </ul>
  );
};

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const location = useLocation();

  return (
    <header
      className={
        "header" +
        (isDarkMode ? " header-darkmode" : "") +
        ` header-${location.pathname.split("/")[1]}`
      }
    >
      <div className="header-logo">
        <Link to={"/"}>Four Seasons</Link>
      </div>
      <ul className="header-nav">
        {seasonList.map((season) => (
          <li className="header-nav-menu" key={season}>
            <Link to={`/${season}/intro`} className="header-nav-link">
              {season.toUpperCase()}
            </Link>
            <Submenu season={season} />
          </li>
        ))}
      </ul>

      <div className="header-button">
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
