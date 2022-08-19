import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const NextButton = ({ enabled, onClick }) => {
  return (
    <button
      className="w-20 h-20"
      onClick={onClick}
      disabled={!enabled}
    >
      <RiArrowRightSLine className="w-full h-full" />
    </button>
  );
};

export default NextButton;
