import React from "react";

const BackgroundImage = (props) => {
  return (
    <div className="w-full tablet:w-1/2 laptop:w-2/3 px-4">
      <img src={props.url} alt={props.url} className="flex flex-auto h-full w-full left-0 top-0 right-0 bottom-0 max-w-none object-cover rounded-lg" />
    </div>
  );
};

export default BackgroundImage;
