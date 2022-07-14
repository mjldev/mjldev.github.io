import React from "react";

const HeaderItem = (props) => {
  return (
    <div className="flex justify-center min-w-screen w-full h-auto items-center text-center relative">
      <div className="min-w-screen w-screen h-auto bg-black opacity-40 py-60 sm:px-40 md:px-60 lg:px-60 xl:px-60"/>
      <p
        className="text-3xl lg:text-4xl xl:text-5xl text-white absolute"
        title={props.title}
      >
        {props.title}
      </p>
    </div>
  );
};

export default HeaderItem;
