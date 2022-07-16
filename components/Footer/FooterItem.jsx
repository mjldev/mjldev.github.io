import React from "react";

const FooterItem = (props) => {
  return (
    <div>
      <p className="text-md text-gray-400" text={props.text}>
        {props.text}
      </p>
    </div>
  );
};

export default FooterItem;
