import React from "react";
import CamsOnline from "../../components/CamsOnline/CamsOnline";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const CamsOnlinePage = () => {
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
        <div>
          <CamsOnline />
        </div>
      </div>
    </div>
  );
};

export default CamsOnlinePage;
