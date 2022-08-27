import React from "react";

const Title = (props) => {
  return (
    <p
      heading={props.heading}
      className="font-oswald font-bold text-5xl laptop:text-6xl text-white uppercase"
    >
      {props.heading}
    </p>
  );
};

export default Title;
