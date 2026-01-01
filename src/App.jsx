import React, { createContext, useState } from "react";
import Calculator from "./components/Calculator/Calculator";
import StopWatch from "./components/StopWatch/StopWatch";
import CamsOnline from "./components/CamsOnline/CamsOnline";
import LandingPage from "./components/LandingPage/LandingPage";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div>
        {/* <ComponentA /> */}
        {/* <StopWatch /> */}
        {/* <Calculator /> */}
        {/* <CamsOnline /> */}
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <LandingPage />
        </ThemeContext.Provider>
      </div>
    </>
  );
}
