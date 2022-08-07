import React from "react";

const HeadingPrimary = (props) => {
  return (
    <h1
      heading={props.heading}
      className="font-oswald font-bold text-5xl md:text-6xl text-white"
    >
      {props.heading}
    </h1>
  );
};

export default HeadingPrimary;
