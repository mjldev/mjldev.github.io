import React from "react";

const BackgroundImage = (props) => {
  return (
    <img
      src={props.url}
      alt={props.alt}
      className="block h-full w-full min-h-[50vh] object-cover rounded-lg"
    />
  );
};

export default BackgroundImage;