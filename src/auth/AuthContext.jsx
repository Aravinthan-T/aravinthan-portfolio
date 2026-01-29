import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("accessToken") || null,
  );

  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken"),
  );

  const login = (token) => {
    console.log("LOGIN CALLED", token);
    localStorage.setItem("accessToken", token);
    setIsAuthenticated(true);
    setRefreshToken("mock-refresh-token");
    localStorage.setItem("refreshToken", refreshToken);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("loginDetails");
    setIsAuthenticated(null);
    setRefreshToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/* eslint-disable react-refresh/only-export-components */
export const useAuth = () => useContext(AuthContext);
