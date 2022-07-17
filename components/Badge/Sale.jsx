import React from "react";

const Sale = (props) => {
  return (
    <span
      className="bg-red-700 text-white text-xs px-1 py-0.5 shadow-md mr-1"
      sale={props.sale}
    >
      SALE
    </span>
  );
};

export default Sale;
