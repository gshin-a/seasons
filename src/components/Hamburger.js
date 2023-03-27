import { useNavigate, useLocation, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

const Hamburger = ({ handleHamburgerOpen }) => {
  return (
    <div className="hamburger">
      <div className="header-logo">
        <span>Four Seasons</span>
      </div>
      <div className="hamburger-menu" onClick={handleHamburgerOpen}>
        <MenuIcon />
      </div>
    </div>
  );
};

export const HamburgerSidebar = ({ handleHamburgerClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="hamburger-sidebar">
      <ul className="hamburger-nav">
        <div className="hamburger-nav-button" onClick={handleHamburgerClose}>
          <ClearIcon />
        </div>
        <li
          className={
            location.pathname === "/"
              ? "curlocation hamburger-nav-menu"
              : "hamburger-nav-menu"
          }
        >
          <Link to={"/"} className="hamburger-nav-link">
            HOME
          </Link>
        </li>
        <li className="hamburger-nav-menu">
          <Link to={"/spring/intro"} className="hamburger-nav-link">
            SPRING
          </Link>
          <ul className="hamburger-nav-submenu">
            <li
              onClick={() => {
                navigate("/spring/intro");
                handleHamburgerClose();
                window.scrollTo(0, 0);
              }}
            >
              &raquo; Introduction
            </li>
            <li
              onClick={() => {
                navigate("/spring/activity");
                handleHamburgerClose();
                window.scrollTo(0, 0);
              }}
            >
              &raquo; Activities
            </li>
            <li
              onClick={() => {
                navigate("/spring/tip");
                handleHamburgerClose();
                window.scrollTo(0, 0);
              }}
            >
              &raquo; Tips
            </li>
            <li
              onClick={() => {
                navigate("/spring/gallery");
                handleHamburgerClose();
                window.scrollTo(0, 0);
              }}
            >
              &raquo; Gallery
            </li>
            <li
              onClick={() => {
                navigate("/spring/board");
                handleHamburgerClose();
                window.scrollTo(0, 0);
              }}
            >
              &raquo; Board
            </li>
          </ul>
        </li>
        <li className="hamburger-nav-menu">
          <Link to={"/summer/intro"} className="hamburger-nav-link">
            SUMMER
          </Link>
          <ul className="hamburger-nav-submenu">
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
        <li className="hamburger-nav-menu">
          <Link to={"/autumn/intro"} className="hamburger-nav-link">
            AUTUMN
          </Link>
          <ul className="hamburger-nav-submenu">
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
        <li className="hamburger-nav-menu">
          <Link to={"/winter/intro"} className="hamburger-nav-link">
            WINTER
          </Link>
          <ul className="hamburger-nav-submenu">
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
    </div>
  );
};

export default Hamburger;
