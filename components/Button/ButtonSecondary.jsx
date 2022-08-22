import React from "react";
import Link from "next/link";

const ButtonSecondary = (props) => {
  return (
    <Link href={props.url}>
      <a className="text-white font-oswald font-bold bg-personal-buttonSecondary py-2 px-4 bg-gradient-to-r from-personal-neutralDark to-personal-neutralDark bg-no-repeat transition-all duration-200 ease-out bg-[length:0%] hover:bg-[length:100%] whitespace-nowrap">
        {props.children}
      </a>
    </Link>
  );
};

export default ButtonSecondary;
