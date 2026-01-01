import React from "react";
import ComponentC from "./ComponentC";
import { UserContext } from "./ComponentA";

export default function ComponentB() {
  console.log("Loading");
  return (
    <div className="box">
      <h1>Component B</h1>

      <ComponentC />
    </div>
  );
}
