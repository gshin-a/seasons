import { useState } from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="header">
      <div className="header-logo">
        <span>Four Seasons</span>
      </div>
      <ul className="header-nav">
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/spring"}>SPRING</Link>
        </li>
        <li>
          <Link to={"/summer"}>SUMMER</Link>
        </li>
        <li>
          <Link to={"/autumn"}>AUTUMN</Link>
        </li>
        <li>
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
