import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Hamburger, { HamburgerSidebar } from "./components/Hamburger";
import Home from "./pages/Home";
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Autumn from "./pages/Autumn";
import Winter from "./pages/Winter";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openSidebar, setSidebar] = useState(false);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        {openSidebar ? (
          <HamburgerSidebar handleHamburgerClose={() => setSidebar(false)} />
        ) : (
          <Hamburger handleHamburgerOpen={() => setSidebar(true)} />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
          <Route
            path="/spring/:state"
            element={
              <Spring isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
          <Route
            path="/spring"
            element={
              <Spring isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
          <Route
            path="/summer/:state"
            element={
              <Summer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
          <Route
            path="/summer"
            element={
              <Summer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />{" "}
          <Route
            path="/autumn/:state"
            element={
              <Autumn isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
          <Route
            path="/autumn"
            element={
              <Autumn isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
          <Route
            path="/winter/:state"
            element={
              <Winter isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
          <Route
            path="/winter"
            element={
              <Winter isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
