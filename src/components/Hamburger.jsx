import { useNavigate, Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { seasonList, submenuList } from "../data/header";

const Hamburger = ({ handleHamburgerOpen }) => {
  const location = useLocation();
  return (
    <div className={`hamburger hamburger-${location.pathname.split("/")[1]}`}>
      <div className="header-logo">
        <span>Four Seasons</span>
      </div>
      <div className="hamburger-menu" onClick={handleHamburgerOpen}>
        <MenuIcon />
      </div>
    </div>
  );
};

const HamburgerSidebarSubmenu = ({ season, handleHamburgerClose }) => {
  const navigate = useNavigate();

  return (
    <ul className="hamburger-nav-submenu">
      {submenuList.map(({ name, navigation }) => (
        <li
          onClick={() => {
            navigate(`/${season}/${navigation}`);
            handleHamburgerClose();
          }}
        >
          &raquo; {name}
        </li>
      ))}
    </ul>
  );
};

export const HamburgerSidebar = ({ handleHamburgerClose }) => {
  const location = useLocation();

  return (
    <div
      className={`hamburger-sidebar hamburger-sidebar-${
        location.pathname.split("/")[1]
      }`}
    >
      <ul className="hamburger-nav">
        <div className="hamburger-nav-button" onClick={handleHamburgerClose}>
          <ClearIcon />
        </div>
        <li className="hamburger-nav-menu">
          <Link to={"/"} className="hamburger-nav-link">
            HOME
          </Link>
        </li>
        {seasonList.map((season) => (
          <li className="hamburger-nav-menu">
            <Link to={`/${season}/intro`} className="hamburger-nav-link">
              {season.toUpperCase()}
            </Link>
            <HamburgerSidebarSubmenu
              season={season}
              handleHamburgerClose={handleHamburgerClose}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hamburger;
