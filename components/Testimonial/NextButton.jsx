import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const NextButton = ({ onClick }) => {
  return (
    <button
      className="w-20 h-20 text-personal-neutralDark"
      onClick={onClick}
    >
      <RiArrowRightSLine className="w-full h-full" />
    </button>
  );
};

export default NextButton;
