import React, { useState } from "react";
import "../../styles/calculator.css";
import { evaluate } from "mathjs";

const operators = ["+", "-", "*", "/"];
const Calculator = () => {
  const [input, setInput] = useState("");
  const isOperator = (char) => operators.includes(char);

  function handleClick(value) {
    setInput((prev) => prev + value);
  }

  function handleOperator(op) {
    setInput((prev) => {
      if (prev === "" && op !== "-") return prev;

      const lastChar = prev.slice(-1);

      if (isOperator(lastChar)) {
        return prev.slice(0, -1) + op;
      }

      return prev + op;
    });
  }

  function calculate() {
    try {
      setInput(String(evaluate(input)));
    } catch {
      setInput("Error");
    }
  }

  function clear() {
    setInput("");
  }

  return (
    <div className="calculator-body" id="calculator">
      <div id="display">{input || 0}</div>

      <div id="keys">
        <button className="operator-btn" onClick={() => handleOperator("+")}>
          +
        </button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className="operator-btn" onClick={() => handleOperator("-")}>
          -
        </button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button className="operator-btn" onClick={() => handleOperator("*")}>
          *
        </button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className="operator-btn" onClick={() => handleOperator("/")}>
          /
        </button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculate}>=</button>
        <button className="operator-btn" onClick={clear}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
