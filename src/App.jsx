import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hamburger, {
  HamburgerMenu,
  HamburgerSidebar,
} from "./components/Hamburger";
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
        <HamburgerMenu openSidebar={openSidebar} setSidebar={setSidebar} />
        {openSidebar ? (
          <HamburgerSidebar handleHamburgerClose={() => setSidebar(false)} />
        ) : (
          <Hamburger />
        )}
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route
            path="/spring/:state"
            element={<Spring isDarkMode={isDarkMode} />}
          />
          <Route
            path="/summer/:state"
            element={<Summer isDarkMode={isDarkMode} />}
          />
          <Route
            path="/autumn/:state"
            element={<Autumn isDarkMode={isDarkMode} />}
          />
          <Route
            path="/winter/:state"
            element={<Winter isDarkMode={isDarkMode} />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
