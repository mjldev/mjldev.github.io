import React from "react";

const FooterItem = (props) => {
  return (
    <div>
      <p className="text-md text-gray-400" copyright={props.copyright}>
        {props.copyright}
      </p>
    </div>
  );
};

export default FooterItem;
