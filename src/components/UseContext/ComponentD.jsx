import React, { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";

export default function ComponentD() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="box">
      <h1>Component D</h1>
      <button onClick={() => setUser("React Aravinth")}>Click me</button>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}
