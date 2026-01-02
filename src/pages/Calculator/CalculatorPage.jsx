import React from "react";
import Calculator from "../../components/Calculator/Calculator";
import "../../styles/calculator.css";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CalculatorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="calculator-page d-flex flex-column gap-5">
      <div
        className="pt-4 ps-4 d-flex gap-1 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <span>
          <IoArrowBack />
        </span>
        <span>Back</span>
      </div>
      <div className="d-flex flex-column align-items-center">
        <Calculator />
      </div>
    </div>
  );
};

export default CalculatorPage;
