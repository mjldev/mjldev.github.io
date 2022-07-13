import React from "react";

const FooterItem = (props) => {
  return (
    <div>
      <p className="text-sm text-gray-400 font-bold" copyright={props.copyright}>
        {props.copyright}
      </p>
    </div>
  );
};

export default FooterItem;
