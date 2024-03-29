import React from "react";

const TitlePrimary = (props) => {
  return (
    <p
      className="text-personal-textPrimary font-oswald uppercase font-bold text-4xl desktop:text-5xl"
      title={props.title}
    >
      {props.title}
    </p>
  );
};

export default TitlePrimary;
