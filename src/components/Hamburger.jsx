import { useNavigate, Link, useLocation } from "react-router-dom";
import { seasonList, submenuList } from "../data/header";

const Hamburger = () => {
  const location = useLocation();
  return (
    <div className={`hamburger hamburger-${location.pathname.split("/")[1]}`}>
      <div className="header-logo">
        <Link to={"/"}>Four Seasons</Link>
      </div>
    </div>
  );
};

const HamburgerSidebarSubmenu = ({ season }) => {
  const navigate = useNavigate();

  return (
    <ul className="hamburger-nav-submenu">
      {submenuList.map(({ name, navigation }) => (
        <li
          key={name}
          onClick={() => {
            navigate(`/${season}/${navigation}`);
          }}
        >
          &raquo; {name}
        </li>
      ))}
    </ul>
  );
};

export const HamburgerSidebar = () => {
  const location = useLocation();

  return (
    <div
      className={`hamburger-sidebar hamburger-sidebar-${
        location.pathname.split("/")[1]
      }`}
    >
      <ul className="hamburger-nav">
        <li className="hamburger-nav-menu">
          <Link to={"/"} className="hamburger-nav-link">
            HOME
          </Link>
        </li>
        {seasonList.map((season) => (
          <li key={season} className="hamburger-nav-menu">
            <Link to={`/${season}/intro`} className="hamburger-nav-link">
              {season.toUpperCase()}
            </Link>
            <HamburgerSidebarSubmenu season={season} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const HamburgerMenu = ({ openSidebar, setSidebar }) => {
  return (
    <div
      className={`hamburger-menu hamburger-${openSidebar ? "open" : "close"}`}
      onClick={() => {
        setSidebar(!openSidebar);
      }}
    >
      <div className="hamburger1" />
      <div className="hamburger2" />
      <div className="hamburger3" />
    </div>
  );
};

export default Hamburger;
