import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StopWatch from "./components/StopWatch/StopWatch";
import CamsOnline from "./components/CamsOnline/CamsOnline";
import LandingPage from "./pages/LandingPage/LandingPage";
import CalculatorPage from "./pages/Calculator/CalculatorPage";
import CamsOnlinePage from "./pages/CamsOnlineAgGrid/CamsOnlinePage";

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
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/cams-online" element={<CamsOnline />} />
          <Route path="/cams-online-ag-grid" element={<CamsOnlinePage />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}
