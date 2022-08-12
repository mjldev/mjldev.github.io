import React from "react";

const DotButton = ({ selected, onClick }) => (
  <button
    className={`bg-trasparent rounded-full cursor-pointer relative p-0 outline-0 w-2 h-2 mx-1 flex items-center ${
      selected ? "bg-trasparent ring ring-white opacity-80" : "bg-white"
    }`}
    type="button"
    onClick={onClick}
  />
);

export default DotButton;