import React from "react";
import StopWatch from "../../components/StopWatch/StopWatch";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const StopwatchPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="d-flex flex-column gap-5">
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
          <StopWatch />
        </div>
      </div>
    </div>
  );
};

export default StopwatchPage;
