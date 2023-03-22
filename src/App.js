import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Autumn from "./pages/Autumn";
import Winter from "./pages/WInter";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
          <Route
            path="/spring"
            element={
              <Spring isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
          <Route
            path="/summer"
            element={
              <Summer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
          <Route
            path="/autumn"
            element={
              <Autumn isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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
