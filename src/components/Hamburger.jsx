import { useNavigate, Link } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <div className="hamburger-sidebar">
      <ul className="hamburger-nav">
        <div className="hamburger-nav-button" onClick={handleHamburgerClose}>
          <ClearIcon />
        </div>
        <li className="hamburger-nav-menu">
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
              }}
            >
              &raquo; Introduction
            </li>
            <li
              onClick={() => {
                navigate("/spring/activity");
                handleHamburgerClose();
              }}
            >
              &raquo; Activities
            </li>
            <li
              onClick={() => {
                navigate("/spring/tip");
                handleHamburgerClose();
              }}
            >
              &raquo; Tips
            </li>
            <li
              onClick={() => {
                navigate("/spring/gallery");
                handleHamburgerClose();
              }}
            >
              &raquo; Gallery
            </li>
            <li
              onClick={() => {
                navigate("/spring/board");
                handleHamburgerClose();
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
            <li
              onClick={() => {
                navigate("/summer/intro");
                handleHamburgerClose();
              }}
            >
              &raquo; Introduction
            </li>
            <li
              onClick={() => {
                navigate("/summer/activity");
                handleHamburgerClose();
              }}
            >
              &raquo; Activities
            </li>
            <li
              onClick={() => {
                navigate("/summer/tip");
                handleHamburgerClose();
              }}
            >
              &raquo; Tips
            </li>
            <li
              onClick={() => {
                navigate("/summer/gallery");
                handleHamburgerClose();
              }}
            >
              &raquo; Gallery
            </li>
            <li
              onClick={() => {
                navigate("/summer/board");
                handleHamburgerClose();
              }}
            >
              &raquo; Board
            </li>
          </ul>
        </li>
        <li className="hamburger-nav-menu">
          <Link to={"/autumn/intro"} className="hamburger-nav-link">
            AUTUMN
          </Link>
          <ul className="hamburger-nav-submenu">
            <li
              onClick={() => {
                navigate("/autumn/intro");
                handleHamburgerClose();
              }}
            >
              &raquo; Introduction
            </li>
            <li
              onClick={() => {
                navigate("/autumn/activity");
                handleHamburgerClose();
              }}
            >
              &raquo; Activities
            </li>
            <li
              onClick={() => {
                navigate("/autumn/tip");
                handleHamburgerClose();
              }}
            >
              &raquo; Tips
            </li>
            <li
              onClick={() => {
                navigate("/autumn/gallery");
                handleHamburgerClose();
              }}
            >
              &raquo; Gallery
            </li>
            <li
              onClick={() => {
                navigate("/autumn/board");
                handleHamburgerClose();
              }}
            >
              &raquo; Board
            </li>
          </ul>
        </li>
        <li className="hamburger-nav-menu">
          <Link to={"/winter/intro"} className="hamburger-nav-link">
            WINTER
          </Link>
          <ul className="hamburger-nav-submenu">
            <li
              onClick={() => {
                navigate("/winter/intro");
                handleHamburgerClose();
              }}
            >
              &raquo; Introduction
            </li>
            <li
              onClick={() => {
                navigate("/winter/activity");
                handleHamburgerClose();
              }}
            >
              &raquo; Activities
            </li>
            <li
              onClick={() => {
                navigate("/winter/tip");
                handleHamburgerClose();
              }}
            >
              &raquo; Tips
            </li>
            <li
              onClick={() => {
                navigate("/winter/gallery");
                handleHamburgerClose();
              }}
            >
              &raquo; Gallery
            </li>
            <li
              onClick={() => {
                navigate("/winter/board");
                handleHamburgerClose();
              }}
            >
              &raquo; Board
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
