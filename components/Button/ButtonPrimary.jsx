import Link from "next/link";
import React from "react";

const ButtonPrimary = (props) => {
  return (
    <Link href={props.url}>
      <a className="text-white font-oswald font-bold bg-personal-primary py-2 px-4 bg-gradient-to-r from-personal-secondary to-personal-secondary bg-no-repeat transition-all duration-200 ease-out bg-[length:0%] hover:bg-[length:100%] whitespace-nowrap">
        {props.children}
      </a>
    </Link>
  );
};

export default ButtonPrimary;
