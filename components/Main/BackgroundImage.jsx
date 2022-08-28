import React from "react";

const BackgroundImage = (props) => {
  return (
    <img
      src={props.url}
      alt={props.alt}
      className="h-[60vh] w-full object-cover rounded-lg"
    />
  );
};

export default BackgroundImage;
