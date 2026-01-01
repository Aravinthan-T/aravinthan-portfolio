/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

export default function ComponentA() {
  const [user, setUser] = useState("Aravinth");
  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={{ user, setUser }}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}
