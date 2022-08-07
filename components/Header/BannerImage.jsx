import React from "react";

const BannerImage = (props) => {
  return (
    <img
      className="absolute flex-auto w-full h-full left-0 top-0 right-0 bottom-0 max-w-none flex object-cover"
      src={props.url}
      alt="bg-image"
    >{props.children}</img>
  );
};

export default BannerImage;
