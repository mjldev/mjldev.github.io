import React from "react";

const Text = (props) => {
  return (
    <p className="text-personal-textPrimary leading-8 text-base laptop:text-lg" text={props.text}>
      {props.text}
    </p>
  );
};

export default Text;
