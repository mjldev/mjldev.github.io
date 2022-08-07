import React from "react";

const DotButton = ({ selected, onClick }) => (
  <button
    className={`bg-trasparent cursor-pointer relative p-0 outline-0 border-0 w-3 h-3 rounded-full mx-2 flex items-center ${
      selected
        ? "bg-trasparent ring ring-white opacity-80 flex"
        : "bg-white h-3 w-full opacity-80 hover:opacity-70 rounded-full"
    }`}
    type="button"
    onClick={onClick}
  />
);

export default DotButton;
