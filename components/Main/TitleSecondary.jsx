import React from "react";

const TitleSecondary = (props) => {
  return (
    <p
      className="text-personal-textPrimary font-semibold uppercase text-2xl desktop:text-4xl selection:text-personal-primary"
      title={props.title}
    >
      {props.title}
    </p>
  );
};

export default TitleSecondary;
