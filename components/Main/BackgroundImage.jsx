import React from "react";

const BackgroundImage = (props) => {
  return (
    <img
      src={props.url}
      alt={props.alt}
      className="h-full w-full object-cover rounded-xl"
    />
  );
};

export default BackgroundImage;
