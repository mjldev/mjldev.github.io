import React from "react";

const ImageLink = (props) => {
  return (
    <img
      src={props.url}
      alt={props.alt}
      className="h-full w-full max-h-[50vh] object-cover rounded-lg hover:scale-110 transition-all duration-700 cursor-pointer"
    />
  );
};

export default ImageLink;
