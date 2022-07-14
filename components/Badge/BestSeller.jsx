import React from "react";

const BestSeller = (props) => {
  return (
    <span
      className="bg-gray-700  text-white text-md px-2.5 py-0.5 rounded-r-md rounded-t-none absolute"
      best={props.best}
    >
      Best Seller
    </span>
  );
};

export default BestSeller;
