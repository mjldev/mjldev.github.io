import React from "react";

const ButtonPrimary = (props) => {
  return (
    <button onClick={props.onClick} type={props.type} className="text-white text-base font-oswald font-bold whitespace-nowrap uppercase py-3 px-6 bg-personal-buttonPrimary hover:bg-personal-buttonHoverPrimary">
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
