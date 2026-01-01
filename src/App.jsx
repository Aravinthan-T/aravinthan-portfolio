import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Calculator from "./components/Calculator/Calculator";
import StopWatch from "./components/StopWatch/StopWatch";
import CamsOnline from "./components/CamsOnline/CamsOnline";
import LandingPage from "./components/LandingPage/LandingPage";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/cams-online" element={<CamsOnline />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}
