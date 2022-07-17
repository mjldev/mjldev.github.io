import React from "react";

const BestSeller = (props) => {
  return (
    <span
      className="bg-white text-black text-xs px-1 py-0.5 shadow-md mr-1"
      best={props.best}
    >
      BEST SELLER
    </span>
  );
};

export default BestSeller;
