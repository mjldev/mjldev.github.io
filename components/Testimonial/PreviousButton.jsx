import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";

const PreviousButton = ({ onClick }) => {
  return (
    <button
      className="w-20 h-20 text-personal-neutralDark"
      onClick={onClick}
    >
      <RiArrowLeftSLine className="w-full h-full" />
    </button>
  );
};

export default PreviousButton;
