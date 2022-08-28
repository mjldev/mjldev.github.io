import React, { useState } from "react";

const ContactInput = (props) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="flex flex-col relative z-0 group">
      <label
        label={props.label}
        htmlFor={props.htmlFor}
        className={`text-personal-textPrimary uppercase font-bold absolute left-4 ${
          focus ? "top-1 text-xs" : "top-5 text-base"
        }`}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        onClick={() => setFocus(true)}
        required
        className="border border-personal-borderDark text-personal-textPrimary focus:bg-gray-50 pl-4 py-5"
      />
    </div>
  );
};

export default ContactInput;
