import React from "react";

const Text = (props) => {
  return (
    <p className="leading-relaxed text-base laptop:text-lg" text={props.text}>
      {props.text}
    </p>
  );
};

export default Text;
