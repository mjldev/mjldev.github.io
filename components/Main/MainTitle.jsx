import React from "react";

const MainTitle = (props) => {
  return (
    <div className="flex text-center flex-col justify-center my-8">
      <p className="text-3xl lg:text-4xl xl:text-4xl mb-3" title={props.title}>{props.title}</p>
      <p className="text-xl  text-gray-400" title2={props.title2}>{props.title2}</p>
    </div>
  );
};

export default MainTitle;
