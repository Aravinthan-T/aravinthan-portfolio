import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import CalculatorPage from "./pages/Calculator/CalculatorPage";
import CamsOnlinePage from "./pages/CamsOnline/CamsOnlinePage";
import StopwatchPage from "./pages/Stopwatch/StopwatchPage";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/stopwatch" element={<StopwatchPage />} />
          <Route path="/cams-online" element={<CamsOnlinePage />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}
