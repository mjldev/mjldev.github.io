import React from "react";

const HeaderItem = (props) => {
  return (
    <div className="flex justify-center w-full h-auto items-center text-center">
      <div className="min-w-screen w-screen h-auto bg-black opacity-40 relative p-40"/>
      <p
        className="font-bold text-5xl text-white absolute"
        title={props.title}
      >
        {props.title}
      </p>
    </div>
  );
};

export default HeaderItem;
