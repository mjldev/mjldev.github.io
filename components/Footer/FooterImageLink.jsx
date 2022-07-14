import React from "react";

const FooterImageLink = (props) => {
  return (
    <div>
      <img className="w-5 h-auto" src={props.url} alt={props.alt}>
        {props.children}
      </img>
    </div>
  );
};

export default FooterImageLink;
