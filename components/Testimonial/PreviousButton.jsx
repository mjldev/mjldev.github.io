import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";

const PreviousButton = ({ enabled, onClick }) => {
  return (
    <button
      className="w-20 h-20"
      onClick={onClick}
      disabled={!enabled}
    >
      <RiArrowLeftSLine className="w-full h-full" />
    </button>
  );
};

export default PreviousButton;
