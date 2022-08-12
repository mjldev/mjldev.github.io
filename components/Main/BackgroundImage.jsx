import React from "react";

const BackgroundImage = (props) => {
  return (
    <img
      src={props.url}
      alt={props.url}
      className="block h-full w-full object-cover rounded-lg"
    />
  );
};

export default BackgroundImage;
